import {
	Container,
	Row, Col,
	Button
} from 'reactstrap';

import './main.css';
import { animation as anim } from '../constants';
import Greetings from './greetings';

const Main = () => {
	return <Container fluid='lg' className='p-responsive gutter-spacious mx-auto' color='dark'>
		<Row>
			<Col className='text-center' >
				<Col xs='6' md='4' lg='2' className='mx-auto my-4' >
					<a href='#'><img src='/assets/logo.png' alt='Logo' className='w-100' /></a>
				</Col>
				<Col className='levitating'>
					<Greetings />
				</Col>
			</Col>
		</Row>
		<Row className='text-center px-1' style={{ marginTop: `${5 * anim.charLen}em`, zIndex: 4 }}>
			<Col xs='12 mb-2'>
				<h5>We are GitHub Campus Experts from India.</h5>
			</Col>
			<Col xs='12'>
				<Row>
					<Col className='col-12 col-md-2 offset-md-3 mb-1'>
						<a 
							href='https://apply.githubcampus.expert/'
							target='_blank'
							className='btn d-block w-100 btn-light' style={{
							backgroundColor: '#DD5522',
							borderColor: '#DD5522',
							color: 'white'
						}}><b>🚩 Apply</b></a>
					</Col>
					<Col className='col-12 col-md-2 mb-1'>
						<a href='#' className='btn d-block w-100 btn-light text-black'><b>🎭 Discover</b></a>
					</Col>
					<Col className='col-12 col-md-2 mb-1'>
						<a href='#' className='btn d-block w-100 btn-success'><b>📨 Contact</b></a>
					</Col>
				</Row>
			</Col>
		</Row>
	</Container>;
};

export default Main;