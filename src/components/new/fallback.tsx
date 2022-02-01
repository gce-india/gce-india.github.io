import { Fragment } from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	CardHeader,
	CardTitle,
	CardSubtitle,
	CardImg,
	CardBody
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGraduationCap,
	faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

import { Expert } from '../../schema/expert';
import { Meta } from '..';
import { title } from '../../constants';

const Profile = (expert: Expert) => {
	const location = useLocation();

	return <Container fluid='md mt-5 mb-5'>
		<Meta
			title={`${expert.name} - ${expert.username}`}
			/>
		<Row style={{
			minHeight: 400
		}} className='justify-content-center mt-auto mb-auto'>
			<Col xs='11' lg='2'>
				<Row>
					<Card className='py-3 text-black'
						style={{ minHeight: '480px' }}>
						<CardHeader>
							<CardImg className='rounded-3' title={expert.name} src={expert.picture} alt={expert.name} />
							<CardTitle className='mt-3'>
								<a className='no-decor'
									title={`${expert.name} - Local profile`}
									href={location.pathname}>
									<h5>{ expert.name }</h5>
								</a>
							</CardTitle>
							<CardSubtitle>
								<a href={`https://github.com/${expert.username}`}
									target='_blank'
									title={`${expert.name} - GitHub profile`}
									className='no-decor'>
									<code><b>{ expert.username }</b></code>
								</a>
							</CardSubtitle>
							<CardSubtitle className='pt-1'>
								<small>{ expert.title }</small>
							</CardSubtitle>
						</CardHeader>
						<CardBody className='px-1'>
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
							<div className='my-3'
								style={{ borderTop: '1px solid lightgrey' }} />
							<div>
								{
									expert.modules
										.map((mod, i) => <img key={i} className='w-25 p-1'
												src={mod.img} alt={mod.name} title={mod.name}
												style={{ cursor: 'pointer' }}
											/>
										)
								}
							</div>
						</CardBody>
					</Card>
				</Row>
			</Col>
			<Col xs='11' lg='8' className='px-1 px-lg-4 mt-4 mt-lg-0'>
				<h4>About { expert.name }</h4>
				<div className='mt-3 mb-4'
					style={{ borderTop: '1px solid lightgrey' }} />
				<div>
					{ expert.about.map((para, i) => <div key={i} className='mb-3'>{ para }</div>) }
				</div>
				<h4>Skills</h4>
				<div className='mt-3 mb-4'
					style={{ borderTop: '1px solid lightgrey' }} />
					<div>
						{
							expert.skills.map((skill, i) => <Fragment key={i}>
								<span
									className='code d-inline-block mb-2'
									style={{
										padding: 5,
										backgroundColor: 'pink',
										color: 'black',
										borderRadius: 3,
										width: 'max-content'
									}}
									>
									{ skill }
								</span>{' '}
							</Fragment>)
						}
					</div>
			</Col>
		</Row>
		<Row className='mt-3 justify-content-center'>
			<Col xs='12' md='8' className='opacity-50'>
				This profile was generated via the official GitHub Campus Expert website.
				<br/>
				Are you { expert.name }? <a href='https://github.com/gce-india/gce-india.github.io' target='_blank'>Create your own profile</a> on the { title } website.
			</Col>
		</Row>
	</Container>;
};

export default Profile;