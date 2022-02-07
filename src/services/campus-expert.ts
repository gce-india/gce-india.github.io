import axios from 'axios';
import cheerio from 'cheerio';
import yaml from 'yaml';

import { Expert, Module } from '../schema/expert';
import { ExpertMini, ExternalExpertMini } from '../schema/expert-mini';
import { Expert as LocalExpert } from '../schema/expert-local';

const getGlobalExpertInfo_ = async (username: string) => {
	const { data: html } = await axios.get(`https://githubcampus.expert/${encodeURIComponent(username!)}`);
	const $ = cheerio.load(html);
	
	// For debugging
	// window.$ = $;
	
	const name = $($(`a[href='/${username}']`).get(0)).text().trim();
	const picture = $($(`img.avatar`).get(0)).attr('src')!;
	const title = $($('div.text-gray').get(0)).text().trim();
	const university = $($(`span[title]`).get(0)).text().trim();
	const location = $($(`span[title]`).get(1)).text().trim();
	const modulesNames = [ ...$('.hex').map((_, e) => $(e).text()) ].map(e => e.trim().split(/\s{2,}/g)[0]);
	const modulesImages = [ ...$('.Popover img').map((_, e) => $(e).attr('src')) ].map(path => `https://githubcampus.expert${path}`);
	const about = [ ...$('.about p').map((_, e) => $(e).text()) ].slice(1, -1); //.join('\n');
	const skills = [ ...$('.skills div').map((_, e) => $(e).text()) ];

	const expert: Expert = {
		name,
		username: username!,
		picture,
		title,
		university,
		location,
		modules: modulesNames.map((name, i) => ({
			name,
			img: modulesImages[i]
		} as Module)),
		about,
		skills
	};
	// console.log(data);

	return expert;
};

const getLocalExpertInfo_ = async (username: string) => {
	const USER_DIR = `/users/${encodeURIComponent(username!)}`;
	const { data: info } = await axios.get(`${USER_DIR}/info.yml`);
	const { data: about } = await axios.get(`${USER_DIR}/about.md`);
	const data = yaml.parse(info);
	
	const expert: LocalExpert = {
		social: [],
		skills: [],
		communities: [],
		username,
		...data,
		about
	};
	// console.log(expert);

	return expert;
};

interface ExpertOutput {
	expert: Expert | LocalExpert,
	type: string
}

const getExpertInfo_ = async (username: string, type?: string): Promise<ExpertOutput> => {
	const USER_DIR = `/users/${encodeURIComponent(username!)}`;
	
	switch (type) {
	case 'local':
		return {
			type: 'local',
			expert: await getLocalExpertInfo(username)
		};
	case 'external':
		return {
			type: 'global',
			expert: await getGlobalExpertInfo(username)
		};
	default:
		try {
			const { data: info } = await axios.get(`${USER_DIR}/info.yml`);
			yaml.parse(info);
		} catch (e) {
			return {
				type: 'global',
				expert: await getGlobalExpertInfo(username)
			};
		}
		return {
			type: 'local',
			expert: await getLocalExpertInfo(username)
		};
	}
};

const getExpertIndex_ = async (): Promise<{
	users: {
		expert: ExpertMini | ExternalExpertMini,
		type: string
	}[]
}> => {
	const resp = await axios.get('/resources/index.yml');
	const index: {
		users: (ExpertMini | ExternalExpertMini)[]
	} = yaml.parse(resp.data);

	const experts = index.users.map(e => ({
		expert: e.local ? e as ExpertMini : e as ExternalExpertMini,
		type: e.local ? 'local' : 'external'
	}));

	return {
		users: [
			...experts
		]
	};
};

export const getGlobalExpertInfo = getGlobalExpertInfo_;
export const getLocalExpertInfo = getLocalExpertInfo_;
export const getExpertInfo = getExpertInfo_;
export const getExpertIndex = getExpertIndex_;