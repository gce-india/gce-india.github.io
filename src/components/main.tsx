import { useRef } from 'react';
import {
	Container,
	Row, Col
} from 'reactstrap';

import './main.css';
import {
	animation as anim,
	audioVolumeUnit as volUnit,
	audioTimeSlice as timeSlice
} from '../constants';
import Greetings from './greetings';



const Main = () => {
	const audio = useRef<HTMLAudioElement>(null);
	const audioSymbol = useRef<HTMLDivElement>(null);
	let timeOut: number;

	interface FadeType {
		type: string,
		limit?: number
	};

	const fade = ({ type, limit }: FadeType): void => {
		switch (type) {
			case 'in': {
				const fadeIn = () => {
					if (audio.current!.volume + volUnit >= limit!) {
						audio.current!.volume = limit!;
						return;
					}
					if (audio.current?.volume !== limit) {
						audio.current!.volume += volUnit;
						timeOut = setTimeout(fadeIn, timeSlice);
					}
				};
				fadeIn();
			}
			break;
			case 'out': {
				const fadeOut = () => {
					if (audio.current!.volume - volUnit <= 0) {
						audio.current!.volume = 0;
						return;
					}
					if (audio.current!.volume >= 0) {
						audio.current!.volume -= volUnit;
						timeOut = setTimeout(fadeOut, timeSlice);
					}
				};
				fadeOut();
			}
			break;
			default:
		}
	};

	const playAudio = async () => {
		const limit = 0.3;
		if (timeOut != null)
			clearInterval(timeOut);
		if (audio.current?.paused) {
			audio.current!.currentTime = 0;
			audio.current!.volume = 0;
			fade({ type: 'in', limit });
			audioSymbol.current?.classList.add('show');
			audioSymbol.current?.addEventListener('click', playAudio);
			timeOut = setTimeout(() => {
				fade({ type: 'out' });
				audioSymbol.current?.classList.remove('show');
				audioSymbol.current?.removeEventListener('click', playAudio);
			}, audio.current!.duration * 1000 - timeSlice * (limit / volUnit));
			await audio.current?.play();
			audio.current!.volume = 0;
		} else {
			fade({ type: 'out' });
			audioSymbol.current?.classList.remove('show');
			audioSymbol.current?.removeEventListener('click', playAudio);
			timeOut = setTimeout(() => {
				audio.current?.pause();
				audio.current!.volume = 0;
				audio.current!.currentTime = 0;
			}, timeSlice * (limit / volUnit));
		}
	};

	return <Container fluid='lg' className='p-responsive gutter-spacious mx-auto' color='dark'>
		<div ref={audioSymbol} className='hidden' style={{
			position: 'absolute',
			right: 30
		}}>
			<img src='/assets/sound.gif' style={{
				width: 40,
				opacity: 0.2,
				borderRadius: '50%'
			}} />
		</div>
		<Row>
			<Col className='text-center' >
				<Col xs='6' md='4' lg='2' className='mx-auto my-4' >
					<a onClick={playAudio} href='#'><img src='/assets/logo.png' alt='Logo' className='w-100' /></a>
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
					<audio ref={audio} src='/assets/Vande_Mataram.mp3' />
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