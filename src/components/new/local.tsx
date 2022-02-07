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
	CardBody,
	Badge
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEnvelope,
	faFlag,
	faGraduationCap,
	faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import rehypeRaw from 'rehype-raw';

import { Expert } from '../../schema/expert-local';
import { Meta } from '..';
import Icon from './social-icon';

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
							<CardImg className='cursor-pointer rounded-3' title={expert.name} src={expert.avatar} alt={expert.name} />
							<CardTitle className='mt-3'>
								<Link className='no-decor'
									title={`${expert.name} - Local profile`}
									to={location.pathname}>
									<h5>{ expert.name }</h5>
								</Link>
							</CardTitle>
							<CardSubtitle>
								<a href={`https://github.com/${expert.username}`}
									target='_blank'
									title={`${expert.name} - GitHub profile`}
									className='no-decor' rel="noreferrer">
									<code><b>{ expert.username }</b></code>
								</a>
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
							<div
								title={expert.country}
								style={{
									fontSize: '0.8em',
									textOverflow: 'ellipsis',
									overflow: 'hidden',
									whiteSpace: 'nowrap'
								}}>
								<a href={`mailto:${expert.email}`}>
									<FontAwesomeIcon
										style={{
											marginLeft: 2,
											marginRight: 8
										}}
										icon={faEnvelope} />
										{ expert.email }
									</a>
							</div>
							<div className='my-3'
								style={{ borderTop: '1px solid lightgrey' }} />
							{
								expert.social.map(({ name, url }, i) => <div
									key={i}
									title={name}
									style={{
										fontSize: '0.8em',
										textOverflow: 'ellipsis',
										overflow: 'hidden',
										whiteSpace: 'nowrap'
									}}
									className='mt-1'>
									<a href={url} target='_blank'>
										<Icon name={name} />
										{ name }
									</a>
								</div>)
							}
						</CardBody>
					</Card>
				</Row>
			</Col>
			<Col xs='11' lg='8' className='px-1 px-lg-4 mt-4 mt-lg-0'>
				<h4>About { expert.name }</h4>
				<div className='mt-3 mb-4'
					style={{ borderTop: '1px solid lightgrey' }} />
				<Markdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeRaw, rehypeSanitize]}
					linkTarget='_blank'>{ expert.about }</Markdown>
				{
					expert.skills.length > 0 ? <>
						<h4 className='mt-2'>Skills</h4>
						<div className='mt-3 mb-4'
							style={{ borderTop: '1px solid lightgrey' }} />
						<div>
							{
								expert.skills.map((skill, i) => <Fragment key={i}>
									<span
										className='code d-inline-block mb-2'
										style={{
											padding: 5,
											backgroundColor: '#a8328f',
											color: 'white',
											borderRadius: 3,
											width: 'max-content'
										}}
									>
										{ skill }
									</span>{' '}
								</Fragment>)
							}
						</div>
					</> : ''
				}
				{
					expert.communities.length > 0 ?
						<>
						<h4 className='mt-2'>Communities</h4>
						<div className='mt-3 mb-4'
							style={{ borderTop: '1px solid lightgrey' }} />
						<div>
							{
								expert.communities.map((com, i) => <Fragment key={i}>
									<Badge color='primary' className='fs-6 py-2' >
										{ com }
									</Badge>{' '}
								</Fragment>)
							}
						</div>
						</>
					: ''
				}
				<Row className='mt-3 justify-content-center'>
					<Col style={{ fontSize: '0.9em' }} xs='12' className='opacity-50'>
						Click here to <a target='_blank' href={`https://githubcampus.expert/${expert.username}`} rel="noreferrer">view the profile</a> on the official <a target='_blank' href='https://githubcampus.expert' rel="noreferrer">GitHub Campus Expert website</a>.
					</Col>
				</Row>
			</Col>
		</Row>
	</Container>;
};

export default Profile;