import {
	Col,
	Card,
	CardHeader,
	CardImg,
	CardTitle,
	CardSubtitle,
	CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { ExternalExpertMini as ExpertMini } from '../../schema/expert-mini';

const Expert = ({ expert }: {
	expert: ExpertMini
}) => {
	return <Col className='text-dark mb-3' xs='12' md='6' lg='3'>
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
};

export default Expert;