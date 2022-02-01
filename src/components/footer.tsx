import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import './footer.css';
import { title } from '../constants';

const TRANSITION_TIME = 1;

const Foot = styled.footer`
	opacity: 0.8;
	filter: blur(0.5px);
	transition: all ${TRANSITION_TIME}s;

	&:hover {
		filter: blur(0);
		opacity: 1;
	}
`;

const Back = styled.div`
	z-index: -100;
	position: absolute;
	opacity: 0.05;
	left: 50%;
	transform: translate(-50%, -1.2em);
	width: 100%;
	max-width: 900px;
	height: 100%;
	border-radius: 50%;
	height: 140%;
	filter: blur(3px);
	background-color: white;
	transition: all ${TRANSITION_TIME}s;

	&:hover {
		opacity: 0.08;
	}
`;

const Footer = () => {
	return <>
		<Foot id='footer' className='container mt-5 pt-2 mb-5 pb-2 text-center'>
			<Back />
			<Col>
				&copy; { title } 2021-{ new Date().getFullYear() }
			</Col>
			<Col>
				Made with <span className='heart'>❤</span> by <a style={{
					color: 'pink'
				}} href='https://www.paramsid.com' target='_blank' rel="noreferrer">Param</a>.
			</Col>
		</Foot>
		<Container style={{
			transform: 'scale(80%)',
			opacity: 0.3
		}}>
			<Row className='text-center'>
				<Col xs='12' className='offset-md-8 col-md-2 mb-2'>
					<a href='https://education.github.com/experts/terms' target='_blank' rel="noreferrer">Terms of Service</a>
				</Col>
				<Col xs='12' className='col-md-2 mb-2'>
					<a href='https://education.github.com/experts/' target='_blank' rel="noreferrer">Campus Experts</a>
				</Col>
			</Row>
		</Container>
	</>;
};

export default Footer;