// import { MutableRefObject, useEffect, useRef, useState } from 'react';
import {
	Container, Row, Col
} from 'reactstrap';
import { default as styled, css, keyframes } from 'styled-components';

import './main.css';
import { greetings as greetingsObj } from '../constants';

const greetings: string[] = Object.keys(greetingsObj).map(k => greetingsObj[k]) as string[];

const anim: { [k: string]: number } = {
	diff: 0.2,
	len: greetings.length,
};

anim.frac = parseFloat((100 / anim.len).toFixed(4));

const Main = () => {
	return <Container fluid='lg' className='p-responsive gutter-spacious mx-auto' color='dark'>
		<Row>
			<Col className='text-center' >
				<Col xs='6' md='4' lg='2' className='mx-auto my-4' >
					<img src='/assets/logo.png' alt='Logo' className='w-100' />
				</Col>
				{/* <div id='greeting-parent'> */}
					{ greetings.map((greeting, i) => {
						const charLen = 2;

						const animation = keyframes`
							0% {
								transform: translateY(0);
								opacity: 0;
							}
							${i * anim.frac}% {
								transform: translateY(0);
								opacity: 0;
							}
							${i * anim.frac + anim.diff}% {
								transform: translateY(-${charLen}em);
								opacity: 1;
							}
							${(i + 1) * anim.frac - anim.diff}% {
								transform: translateY(-${charLen}em);
								opacity: 1;
							}
							${(i + 1) * anim.frac}% {
								transform: translateY(-${charLen * 2}em);
								opacity: 0;
							}
							100% {
								transform: translateY(-${charLen * 2}em);
							}
						`;

						const CustomH1 = styled.h1`
							position: relative;
							opacity: 0;
							user-select: none;
							animation: ${animation} ${anim.len}s infinite forwards linear;
						`;

						return <div className='greeting-minidiv' style={{
							position: 'absolute',
							transform: 'translateY(8em)',
							left: 0,
							right: 0,
							marginLeft: 0,
							marginRight: 0,
							zIndex: -(anim.len + 1)
						}}>
							 <CustomH1 className='greeting' key={i} >
								{ greeting }
							</CustomH1>
						</div>;
					}) }
				{/* </div> */}
			</Col>
		</Row>
		<Row className='text-center' style={{ marginTop: '10em', zIndex: 4 }}>
			<Col>
				We are GitHub Campus Experts from India.
			</Col>
		</Row>
	</Container>;
};

export default Main;