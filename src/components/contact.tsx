import {
	Container,
	Row,
	Col
} from 'reactstrap';

import { formLink } from '../constants';
import Meta from './meta';

const Contact = () => <Container style={{
	minHeight: 400
}} fluid='md mt-5 mb-5'>
	<Meta
		title='Contact Us'
		description='Contact GitHub Campus Experts India. Campus Experts are student leaders that strive to build and support diverse and inclusive spaces in technical communities.'
	/>
	<Row className='justify-content-center mt-auto mb-auto'>
		<Col xs='12' md='8'>
			<h4 className='text-center mb-3'>Contact Us</h4>
		</Col>
	</Row>
	<Row className='mt-3 justify-content-center'>
		<Col xs='12' md='8'>
			If you:
			<ul>
				<li>Seek guidance or mentorship for projects</li>
				<li>Need help in organizing an event</li>
				<li>Have anything important to convey</li>
			</ul>
			Just fill this form below and let us know!
		</Col>
	</Row>
	<Row className='mt-3 justify-content-center'>
		<Col xs='12' md='8' className='text-center'>
			<iframe src={formLink} style={{
				width: '95%',
				minHeight: 400,
				border: '2px solid red',
				backgroundColor: 'white'
			}}></iframe>
		</Col>
	</Row>
	<Row className='mt-3 justify-content-center'>
		<Col xs='12' md='8' className='opacity-50'>
			Pssst... If you are also interested in becoming a campus expert, apply <a href='https://apply.githubcampus.expert/' target='_blank' rel="noreferrer">here</a>.
			Applications open twice a year, so hurry up!
		</Col>
	</Row>
</Container>;

export default Contact;