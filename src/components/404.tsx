import {
	Container,
	Row,
	Col
} from 'reactstrap';
import { Link } from 'react-router-dom';

import Meta from './meta';

const NotFound = () => <Container fluid='md mt-5 mb-5'>
	<Meta
		title='Not Found'
		description='404 - Not Found! This is the official website of GitHub Campus Experts India. Campus Experts are student leaders that strive to build and support diverse and inclusive spaces in technical communities.'
	/>
	<Row style={{
		minHeight: 400
	}} className='align-items-center mt-auto mb-auto'>
		<Col xs='12' className='text-center'>
			<h1>Uh oh!</h1>
			<h3 className='mb-2'>Looks like you came to the wrong page.</h3>
			<p className='mb-4'>Try going back to the homepage.</p>
			<Link to='/' className='btn text-black btn-info'>Return to Home</Link>
		</Col>
	</Row>
</Container>;

export default NotFound;