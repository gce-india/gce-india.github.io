import axios from 'axios';
import cheerio from 'cheerio';

import { Expert, Module } from '../schema/expert';

const getExpertInfo_ = async (username: string) => {
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

export const getExpertInfo = getExpertInfo_;