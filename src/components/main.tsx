import {
	Container, Row, Col
} from 'reactstrap';

import './main.css';
import { animation as anim } from '../constants';
import Greetings from './greetings';

const Main = () => {
	return <Container fluid='lg' className='p-responsive gutter-spacious mx-auto' color='dark'>
		<Row>
			<Col className='text-center' >
				<Col xs='6' md='4' lg='2' className='mx-auto my-4' >
					<a href='/'><img src='/assets/logo.png' alt='Logo' className='w-100' /></a>
				</Col>
				<Col className='levitating'>
					<Greetings />
				</Col>
			</Col>
		</Row>
		<Row className='text-center px-1' style={{ marginTop: `${5 * anim.charLen}em`, zIndex: 4 }}>
			<Col>
				<h5>We are GitHub Campus Experts from India.</h5>
			</Col>
		</Row>
	</Container>;
};

export default Main;