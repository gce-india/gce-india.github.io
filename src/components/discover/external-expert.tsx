import { Fragment, useState, useEffect } from 'react';
import {
	Col,
	Card,
	CardHeader,
	CardImg,
	CardTitle,
	CardSubtitle,
	CardBody,
	Badge
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faGraduationCap, faInbox, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { Expert as ExpertType } from '../../schema/expert';
import { getGlobalExpertInfo } from '../../services/campus-expert';

const Expert = ({ expert: { username } }: {
	expert: { username: string }
}) => {
	const [expert, setExpert] = useState<ExpertType | null>(null);

	useEffect(() => {
		(async () => {
			const data = await getGlobalExpertInfo(username);
			setExpert(data as ExpertType);
		})().catch(e => {
			console.error(e);
		});
	}, []);

	if (expert != null)
		return <Col className='text-dark' xs='12' md='6' lg='3'>
			<Card>
				<CardHeader className='text-center py-3'>
					<Link to={`/${encodeURIComponent(expert.username)}`}>
						<CardImg className='cursor-pointer rounded-3' title={expert.name} src={expert.picture} alt={expert.name} />
					</Link>
					<CardTitle className='mt-1'>
						<Link className='no-decor'
							title={`${expert.name} - Local profile`}
							to={`/${encodeURIComponent(expert.username)}`}>
							<h5>{ expert.name }</h5>
						</Link>
					</CardTitle>
					<CardSubtitle>
						<Link to={`/${encodeURIComponent(expert.username)}`}
							title={`${expert.name} - Local profile`}
							className='no-decor'>
							<code><b>{ expert.username }</b></code>
						</Link>
					</CardSubtitle>
				</CardHeader>
				<CardBody>
					<div
						title={expert.university}
						style={{
							fontSize: '0.8em',
							textOverflow: 'ellipsis',
							overflow: 'hidden',
							whiteSpace: 'nowrap'
						}}>
						<FontAwesomeIcon
							style={{ marginRight: 5 }}
							icon={faGraduationCap} />
						{ expert.university }
					</div>
					<div
						title={expert.location}
						style={{
							fontSize: '0.8em',
							textOverflow: 'ellipsis',
							overflow: 'hidden',
							whiteSpace: 'nowrap'
						}}>
						<FontAwesomeIcon
							style={{
								marginLeft: 4,
								marginRight: 8
							}}
							icon={faMapMarkerAlt} />
						{ expert.location }
					</div>
				</CardBody>
			</Card>
		</Col>;

	return <></>;
}

export default Expert;