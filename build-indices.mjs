#!/usr/bin/env zx
import 'zx/globals';

import glob from 'glob';
import yaml from 'yaml';

fs.ensureDirSync(path.join(__dirname, 'public', 'users'));
fs.ensureDirSync(path.join(__dirname, 'public', 'resources'));

const p = path.join(__dirname, 'public', 'users', '*') + path.sep;
glob(p, {}, async (e, files) => {
	if (e != null) {
		console.error(e.message, e);
		process.exit(1);
	}

	try {
		const users = await Promise.all(files.map(async f => {
			const o = {
				username: path.basename(f),
				path: path.relative(path.join(__dirname, 'public'), f)
			};

			const filesToCheck = [
				'about.md',
				'info.yml'
			];
			if (!filesToCheck.map(file => fs.existsSync(path.join(f, file))).reduce((a, b) => a && b)) {
				console.error(`Invalid contents of directory '${path.join('public', o.path)}'!`);
				process.exit(1);
			}

			const infoFile = path.join(f, 'info.yml');
			const info = yaml.parse((await fs.readFile(infoFile)).toString());

			const user = {
				username: o.username,
				name: info.name,
				university: info.university,
				location: info.location,
				country: info.country,
				avatar: info.avatar,
				communities: info.communities
			};

			return user;
		}));

		const index = yaml.stringify({ users });
		await fs.writeFile(path.join(__dirname, 'public', 'resources', 'index.yml'), index);
	} catch (e) {
		console.error(e.message, e);
		process.exit(1);
	}
});