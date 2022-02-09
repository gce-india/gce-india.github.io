import fs from 'fs-extra';
import path from 'path';
import glob from 'glob';
import yaml from 'yaml';
import day from 'dayjs';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import metadataParser from 'markdown-yaml-metadata-parser';
import markdownToTxt from 'markdown-to-txt';

import { Expert as LocalExpert } from './src/schema/expert-local';
import { ExpertMini, ExternalExpertMini } from './src/schema/expert-mini';
import { Blog } from './src/schema/blog';
import { getGlobalExpertInfo } from './src/services/campus-expert';
import { SITE_URL, PAGE_SIZE, DATE_FORMAT, UTC_OFFSET } from './src/constants';

fs.ensureDirSync(path.join(__dirname, 'public', 'local'));
fs.ensureDirSync(path.join(__dirname, 'public', 'users'));
fs.ensureDirSync(path.join(__dirname, 'public', 'resources'));
fs.emptyDirSync(path.join(__dirname, 'public', 'resources'));
day.extend(utc);
day.extend(customParseFormat);
day().utcOffset(UTC_OFFSET);

const state: {
	users?: (ExpertMini | ExternalExpertMini)[],
	blogs?: Blog[]
} = {};

const summarize = (markdown: string, maxLength: number = 150) => {
	const text = markdownToTxt(markdown);
	return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

const indexUsers = () => new Promise(async done => {
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

const indexBlogs = () => new Promise(async done => {
	const p = path.join(__dirname, 'public', 'users', '**', 'blogs', '*.md');

	glob(p, {}, async (e: Error | null, files: string[]) => {
		if (e != null)
			throw e;

		try {
			const blogs: Blog[] = await Promise.all(files.map(async f => {
				const split = f.split(path.sep);

				const filename = split[split.length - 1];
				const username = split[split.length - 3];
				const id = path.basename(filename, '.md')
				
				const rawData = (await fs.readFile(f)).toString();
				const {
					metadata: info,
					content: markdown
				} = metadataParser(rawData);

				if (
					!['title'].map(k => !!info[k]).reduce((a, b) => a && b)
					||
					!['date'].map(k => day(info[k], DATE_FORMAT).isValid()).reduce((a, b) => a && b)
				)
					throw new Error(`Invalid values for '${username}/blogs/${id}'.`);
				
				const user = state.users.find(u => u.username === username);
				user.blogs = true;

				return {
					id,
					user: username,
					title: info.title,
					date: day(info.date, DATE_FORMAT).toDate(),
					data: markdown.trim()
				};
			}));

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
	const { users, blogs } = state;

	const routes = [
		'',
		'discover',
		'about',
		'contact',
		'blog',
		...users.map(u => u.username),
		...blogs.slice(0, 25).map(b => `blog/${b.user}/${encodeURIComponent(b.id)}`)
	];
	const sitemap = path.join(__dirname, 'public', 'sitemap.txt');
	await fs.writeFile(sitemap, '', { flag: 'w+', encoding: 'utf-8' });
	for (const route of routes)
		await fs.writeFile(sitemap, SITE_URL + (route === '' ? '' : ('?/' + route)) + '\n', { flag: 'a+', encoding: 'utf-8' });
	console.log('Sitemap generated.');

	for (const u of users.filter(u => u.blogs)) {
		delete u.blogs;
		const userBlogs = blogs.filter(b => b.user === u.username);
		
		const pageCount = Math.floor(userBlogs.length / PAGE_SIZE);
		const leftItemCount = userBlogs.length % PAGE_SIZE;

		await fs.ensureDir(path.join(__dirname, 'public', 'users', u.username, 'blogs', 'index'));
		await fs.emptyDir(path.join(__dirname, 'public', 'users', u.username, 'blogs', 'index'));

		for (let i = 0; i < pageCount; i++) {
			const init = i * PAGE_SIZE;
			const final = (i + 1) * PAGE_SIZE;

			let pageBlogs: any[] = userBlogs.slice(init, final);
			pageBlogs = pageBlogs.map(b => ({
				id: b.id,
				title: b.title,
				date: day(b.date).format(DATE_FORMAT),
				summary: summarize(b.data)
			}));

			const ymlDataObject = { blogs: pageBlogs, lastPage: i === pageCount - 1 && leftItemCount === 0 };
			const ymlData = yaml.stringify(ymlDataObject);
			await fs.writeFile(path.join(__dirname, 'public', 'users', u.username, 'blogs', 'index', `${i}.yml`), ymlData);
		}

		if (leftItemCount > 0) {
			let pageBlogs: any[] = userBlogs.slice(-leftItemCount);
			pageBlogs = pageBlogs.map(b => ({
				id: b.id,
				title: b.title,
				date: day(b.date).format(DATE_FORMAT),
				summary: summarize(b.data)
			}));

			const ymlDataObject = { blogs: pageBlogs, lastPage: true };
			const ymlData = yaml.stringify(ymlDataObject);
			await fs.writeFile(path.join(__dirname, 'public', 'users', u.username, 'blogs', 'index', `${pageCount}.yml`), ymlData);
		}
		console.log(`${pageCount + (leftItemCount > 0 ? 1 : 0)} blog page(s) generated for '${u.username}'`);
	}

	const index = yaml.stringify({ users });
	await fs.writeFile(path.join(__dirname, 'public', 'resources', 'index.yml'), index);
	console.log(`${users.length} campus experts indexed.`);
	
	{
		const pageCount = Math.floor(blogs.length / PAGE_SIZE);
		const leftItemCount = blogs.length % PAGE_SIZE;

		await fs.ensureDir(path.join(__dirname, 'public', 'resources', 'blogs'));
		await fs.emptyDir(path.join(__dirname, 'public', 'resources', 'blogs'));

		for (let i = 0; i < pageCount; i++) {
			const init = i * PAGE_SIZE;
			const final = (i + 1) * PAGE_SIZE;

			let pageBlogs: any[] = blogs.slice(init, final);
			pageBlogs = pageBlogs.map(b => ({
				id: b.id,
				title: b.title,
				author: b.user,
				date: day(b.date).format(DATE_FORMAT),
				summary: summarize(b.data)
			}));

			const ymlDataObject = { blogs: pageBlogs, lastPage: i === pageCount - 1 && leftItemCount === 0 };
			const ymlData = yaml.stringify(ymlDataObject);
			await fs.writeFile(path.join(__dirname, 'public', 'resources', 'blogs', `${i}.yml`), ymlData);
		}

		if (leftItemCount > 0) {
			let pageBlogs: any[] = blogs.slice(-leftItemCount);
			pageBlogs = pageBlogs.map(b => ({
				id: b.id,
				title: b.title,
				author: b.user,
				date: day(b.date).format(DATE_FORMAT),
				summary: summarize(b.data)
			}));

			const ymlDataObject = { blogs: pageBlogs, lastPage: true };
			const ymlData = yaml.stringify(ymlDataObject);
			await fs.writeFile(path.join(__dirname, 'public', 'resources', 'blogs', `${pageCount}.yml`), ymlData);
		}
		console.log(`${pageCount + (leftItemCount > 0 ? 1 : 0)} global blog page(s) generated.`);
	}
};

if (require.main === module)
	(async () => {
		await indexUsers();
		await indexBlogs();
		await writeIndices();
		console.log(`Successfully built all indices!`);
		process.exit(0);
	})();