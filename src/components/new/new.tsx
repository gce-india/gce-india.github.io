import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Meta from '../meta';
import './new.css';
import { Expert } from '../../schema/expert';
import { Expert as LocalExpert } from '../../schema/expert-local';
import Fallback from './fallback';
import Local from './local';
import { NotFound } from '..';
import Loading from './loading';
import { getExpertInfo } from '../../services/campus-expert';

const New = ({ fallback }: { fallback?: boolean } = { fallback: false }) => {
	const { username } = useParams();
	const [expert, setExpert] = useState<Expert | LocalExpert>();
	const [type, setType] = useState('local');
	const [done, setDone] = useState(false);

	useEffect(() => {
		(async () => {
			if (fallback) {
				setType('external');
				const data = await getExpertInfo(username!, 'external');
				setExpert(data.expert as Expert);
				setType('external');
				setDone(true);
				return;
			}

			const output = await getExpertInfo(username!);
			if (output.type === 'local') {
				const data = output.expert as LocalExpert;
				setExpert(data);
				setType('local');
				setDone(true);
			} else {
				const data = output.expert as Expert;
				setExpert(data);
				setType('external');
				setDone(true);
			}
		})().catch(e => {
			console.error(e);
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
	
	if (done && expert && type === 'external')
		return <Fallback {...(expert as Expert)} />;
	
	if (done && expert && type === 'local')
		return <Local {...(expert as LocalExpert)} />;

	return <NotFound />;
};

export default New;