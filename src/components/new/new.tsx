import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Meta from '../meta';
import './new.css';
import { Expert } from '../../schema/expert';
import Fallback from './fallback';
import { NotFound } from '..';
import Loading from './loading';
import { getExpertInfo } from '../../services/campus-expert';

const New = () => {
	const { username } = useParams();
	const [expert, setExpert] = useState<Expert>();
	const [done, setDone] = useState(false);

	useEffect(() => {
		(async () => {
			const data = await getExpertInfo(username!);
			setExpert(data);
			setDone(true);
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
	
	if (done && expert)
		return <Fallback {...expert} />;

	return <NotFound />;
};

export default New;