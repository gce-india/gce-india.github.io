import fs from 'fs-extra';
import path from 'path';
import glob from 'glob';
import yaml from 'yaml';
import day from 'dayjs';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import metadataParser from 'markdown-yaml-metadata-parser';

import { Expert as LocalExpert } from './src/schema/expert-local';
import { ExpertMini, ExternalExpertMini } from './src/schema/expert-mini';
import { getGlobalExpertInfo } from './src/services/campus-expert';

fs.ensureDirSync(path.join(__dirname, 'public', 'local'));
fs.ensureDirSync(path.join(__dirname, 'public', 'users'));
fs.ensureDirSync(path.join(__dirname, 'public', 'resources'));
day.extend(utc);
day.extend(customParseFormat);
day().utcOffset(5 * 60 + 30);

const SITE_URL = process.env.SITE_URL ?? `https://gce-india.github.io/`;

const state: { [k: string]: any } = {};

const indexUsers = () => new Promise(done => {
	const p = path.join(__dirname, 'public', 'users', '*') + path.sep;

	glob(p, {}, async (e: Error | null, files: string[]) => {
		if (e != null)
			throw e;
	
		try {
			const users: (ExpertMini | ExternalExpertMini)[] = await Promise.all(files.map(async f => {
				const o = {
					username: path.basename(f),
					path: path.relative(path.join(__dirname, 'public'), f)
				};
	
				const filesToCheck = [
					'about.md',
					'info.yml'
				];
				if (!filesToCheck.map(file => fs.existsSync(path.join(f, file))).reduce((a, b) => a && b))
					throw new Error(`Invalid contents of directory '${path.join('public', o.path)}'!`);
	
				const infoFile = path.join(f, 'info.yml');
				const info: LocalExpert = yaml.parse((await fs.readFile(infoFile)).toString());
	
				if (
					!['name', 'university', 'location', 'country', 'avatar', 'email'].map(k => info[k] != null).reduce((a, b) => a && b)
					||
					!['communities', 'skills', 'social'].map(k => info[k] == null || Array.isArray(info[k])).reduce((a, b) => a && b)
				)
					throw new Error(`Invalid values for '${o.username}'.`);
	
				const user: ExpertMini = {
					username: o.username,
					name: info.name,
					university: info.university,
					location: info.location,
					country: info.country,
					avatar: info.avatar,
					communities: info.communities || [],
					local: true
				};
	
				return user;
			}));
	
			const externalIndexFile = path.join(__dirname, 'public', 'local', 'index.yml');
			if (fs.existsSync(externalIndexFile)) {
				const localUsernames: string[] = users.map(u => u.username);
				const { users: externalUsers }: {
					users: string[]
				} = yaml.parse((await fs.readFile(externalIndexFile)).toString());
	
				const externalIndex: ExternalExpertMini[] = await Promise.all(externalUsers
					.filter(u => localUsernames.indexOf(u) < 0)
					.map(async username => {
						try {
							const data = await getGlobalExpertInfo(username);
						
							const user: ExternalExpertMini = {
								name: data.name,
								username: data.username,
								picture: data.picture,
								university: data.university,
								location: data.location,
								local: false
						};
	
							return user;
						} catch (e) {
							throw new Error(`Error for username: ${username}! Official profile not found on githubcampus.expert.`);
						}
				}));
	
				for (const user of externalIndex)
					if (user != null)
						users.push(user);
			}
	
			users.sort((a, b) => a.username.localeCompare(b.username));
			state.users = users;
			done(null);
		} catch (e: any) {
			console.error((e as Error).message, e);
			process.exit(1);
		}
	});
});

const indexBlogs = () => new Promise(done => {
	const p = path.join(__dirname, 'public', 'users', '**', 'blogs', '*.md');

	glob(p, {}, async (e: Error | null, files: string[]) => {
		if (e != null)
			throw e;

		try {
			const blogs: {
				user: string,
				title: string,
				date: Date,
				data: string
			}[] = await Promise.all(files.map(async f => {
				const split = f.split(path.sep);

				const filename = split[split.length - 1];
				const username = split[split.length - 3];
				
				const rawData = (await fs.readFile(f)).toString();
				const {
					metadata: info,
					content: markdown
				} = metadataParser(rawData);

				if (
					!['title'].map(k => !!info[k]).reduce((a, b) => a && b)
					||
					!['date'].map(k => day(info[k], 'YYYY-MM-DD hh:mm:ss').isValid()).reduce((a, b) => a && b)
				)
					throw new Error(`Invalid values for '${username}/blogs/${(path.basename(filename))}'.`);

				return {
					user: username,
					title: info.title,
					date: day(info.date, 'YYYY-MM-DD hh:mm:ss').toDate(),
					data: markdown.trim()
				};
			}));

			// TODO
			// users.map(...) ???

			blogs.sort((a, b) => b.date.valueOf() - a.date.valueOf());
			state.blogs = blogs;
			done(null);
		} catch (e: any) {
			console.error((e as Error).message, e);
			process.exit(1);
		}
	});
});

const writeIndices = async () => {
	const { users } = state;

	const index = yaml.stringify({ users });
	await fs.writeFile(path.join(__dirname, 'public', 'resources', 'index.yml'), index);

	const routes = [
		'',
		'discover',
		'about',
		'contact',
		...users.map(u => u.username)
	];
	const sitemap = path.join(__dirname, 'public', 'sitemap.txt');
	await fs.writeFile(sitemap, '', { flag: 'w+', encoding: 'utf-8' });
	for (const route of routes)
		await fs.writeFile(sitemap, SITE_URL + (route === '' ? '' : ('?/' + route)) + '\n', { flag: 'a+', encoding: 'utf-8' });

	console.log(state.blogs.map(b => ({ ...b, data: (b.data as string).slice(0, 30) + '...' })));
	// TODO

};

if (require.main === module) {
	(async () => {
		await indexUsers();
		await indexBlogs();
		await writeIndices();
		console.log(`Successfully built all indices!`);
		process.exit(0);
	})();
}