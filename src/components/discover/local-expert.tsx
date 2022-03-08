import { Fragment } from 'react';
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

import { ExpertMini } from '../../schema/expert-mini';

const Expert = ({ expert }: {
	expert: ExpertMini
}) => {
	return <Col className='text-dark mb-3' xs='12' md='6' lg='3'>
		<Card>
			<CardHeader className='text-center py-3'>
				<Link to={`/${encodeURIComponent(expert.username)}`}>
					<CardImg className='cursor-pointer rounded-3' title={expert.name} src={expert.avatar} alt={expert.name} />
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
				<div
					title={expert.country}
					style={{
						fontSize: '0.8em',
						textOverflow: 'ellipsis',
						overflow: 'hidden',
						whiteSpace: 'nowrap'
					}}>
					<FontAwesomeIcon
						style={{
							marginLeft: 2,
							marginRight: 8
						}}
						icon={faFlag} />
					{ expert.country }
				</div>
				<div className='my-3'
					style={{ borderTop: '1px solid lightgrey' }} />
				<FontAwesomeIcon icon={faInbox} />{' '}
				{
					expert.communities.map((c, i) => <Fragment key={i}>
						<Badge title={c} style={{
							maxWidth: '80%'
						}} className='mb-1' color='secondary'>
							<div style={{
								textOverflow: 'ellipsis',
								overflowX: 'hidden',
								height: '1.15em',
								overflowY: 'visible',
								display: 'inline-block',
								maxWidth: '100%'
							}} >{ c }</div>
						</Badge>{' '}
					</Fragment>)
				}
			</CardBody>
		</Card>
	</Col>;
};

export default Expert;