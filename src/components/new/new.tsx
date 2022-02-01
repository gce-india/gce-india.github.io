import { useEffect, useState } from 'react';
import {
	Container,
	Row,
	Col
} from 'reactstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import cheerio from 'cheerio';

import Meta from '../meta';
import './new.css';
import { Expert, Module } from './expert';
import Fallback from './fallback';
import { NotFound } from '..';
import Loading from './loading';

const New = () => {
	const { username } = useParams();
	const [expert, setExpert] = useState<Expert>();
	const [done, setDone] = useState(false);

	useEffect(() => {
		(async () => {
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

			const data: Expert = {
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
			console.log(data);
			setExpert(data);
			setDone(true);
		})().catch(e => {
			console.log(e);
			setDone(true);
		});
	}, []);

	if (!done)
		return <Loading>
			<Meta
				title={username}
				/>
			Looking for&nbsp;<span className='code'><b>{ username }</b></span>...
		</Loading>;
	
	if (done && expert)
		return <Fallback {...expert} />;

	return <NotFound />;
};

export default New;