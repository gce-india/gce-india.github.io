import {
	Container,
	Row,
	Col
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NotFound = () => <Container fluid='md mt-5 mb-5'>
	<Row>
		<Col xs='12' className='text-center'>
			<h1>Uh oh!</h1>
			<h3>Looks like you came to the wrong page.</h3>
			<p>Try going back to the homepage.</p>
			<Link to='/' className='btn text-black btn-info'>Return to Home</Link>
		</Col>
	</Row>
</Container>;

export default NotFound;