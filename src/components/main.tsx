import {
	Container, Row, Col
} from 'reactstrap';

import { animation as anim } from '../constants';
import Greetings from './greetings';

const Main = () => {
	return <Container fluid='lg' className='p-responsive gutter-spacious mx-auto' color='dark'>
		<Row>
			<Col className='text-center' >
				<Col xs='6' md='4' lg='2' className='mx-auto my-4' >
					<img src='/assets/logo.png' alt='Logo' className='w-100' />
				</Col>
				<Greetings />
			</Col>
		</Row>
		<Row className='text-center' style={{ marginTop: `${5 * anim.charLen}em`, zIndex: 4 }}>
			<Col>
				We are GitHub Campus Experts from India.
			</Col>
		</Row>
	</Container>;
};

export default Main;