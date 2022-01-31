import {
	Container,
	Row,
	Col
} from 'reactstrap';

import { title } from '../constants';

const About = () => <Container fluid='md mt-5 mb-5'>
	<Row style={{
	minHeight: 400
}} className='justify-content-center mt-auto mb-auto'>
		<Col xs='12' md='8'>
			<h4 className='text-center mb-3'>GitHub Campus Experts India</h4>
			<Row className='align-items-center'>
				<Col xs='12' md='6'><img className='img img-block mb-3' style={{
					maxWidth: '85vw'
				}} src='/assets/logo.png' alt={title} /></Col>
				<Col xs='12' md='6' >People learn better when they can learn with a community of likeminded peers. Campus Experts are student leaders that strive to build diverse and inclusive spaces to learn skills, share their experiences, and build projects together. They can be found across the globe leading in-person and online conferences, meetups, and hackathons, and maintaining open source projects. A Campus Expert is trained to build a strong technical community, on campus. As well as training, Campus Experts have access to resources and support from GitHub, such as swag, sponsorship, and the opportunity to attend events like GitHub Universe.</Col>
			</Row>
		</Col>
	</Row>
	<Row className='mt-3 justify-content-center'>
		<Col xs='12' md='8'>
			India, being such a diverse and populated country, is full of engineers of all kinds.
			As campus experts, we volunteer to help our Indian engineering community flourish
			and support students and aspiring engineers, thus enabling them to reach their full potential.
		</Col>
	</Row>
	<Row className='mt-3 justify-content-center'>
		<Col xs='12' md='6'>
			<img className='img img-block border border-3 border-danger rounded-3' width='100%' src='/assets/map.png'
				alt='Campus Experts from India on the map'
				title='Campus Experts from India on the map'
				/>
		</Col>
	</Row>
	<Row className='justify-content-center mt-1'>
		<Col xs='12' md='6' className='text-center'>
			<i>Campus Experts from India on the map (2022)</i>
		</Col>
	</Row>
	<Row className='mt-3 justify-content-center'>
		<Col xs='12' md='8' style={{ maxWidth: '95vw' }} className='bg-light text-dark px-3 py-4 rounded-3 mb-2'>
			The red flag 🚩 is symbolic to laying down a strong and influencial
			foundation of worth, inclusivity, and development in the community.
			The concentration of red flags in India makes it evident that we have
			a large number of campus experts in India.
		</Col>
		<Col xs='12' md='8' className='mt-2'>
			Our mission is to empower the technical communities in India by leading
			the initiative to spread awareness and knowledge (<a target='_blank' href='https://translate.google.com/?sl=auto&tl=en&text=%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%82%E0%A4%95%E0%A4%BF%20%E0%A4%9C%E0%A5%8D%E0%A4%9E%E0%A4%BE%E0%A4%A8%20%E0%A4%AC%E0%A4%BE%E0%A4%82%E0%A4%9F%E0%A4%A8%E0%A5%87%20%E0%A4%B8%E0%A5%87%20%E0%A4%AC%E0%A5%9D%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%88&op=translate'>क्योंकि ज्ञान बांटने से बढ़ता है</a>).
			We wish to fulfill the dream of seeing India emerge as a superpower, from
			a developing nation to a developed nation, and eliminate the problems students
			face.
			<h5 className='text-center mt-1'>But how?</h5>
		</Col>
	</Row>
	<Row className='mt-3 justify-content-center'>
		<Col xs='12' md='8'>
			There's no single way we do that. From organizing hackathons and
			events, to conducting workshops and giving talks, we put in a lot of
			efforts to help you out. 😎
			The life of technical leaders is complicated. We love you! ❤
		</Col>
	</Row>
	<Row className='mt-3 justify-content-center'>
		<Col xs='12' md='8'>
			You can discover your local campus experts from the official GitHub Campus Experts website.
		</Col>
		<Col xs='12' md='8' className='text-center mt-1'>
		<a href='http://githubcampus.expert/' target='_blank' className='btn text-center btn-danger'>GitHub Campus Experts</a>
		</Col>
	</Row>
	<Row className='mt-3 justify-content-center'>
		<Col xs='12' md='8' className='opacity-50'>
			Pssst... If you are also interested in becoming a campus expert, apply <a href='https://apply.githubcampus.expert/' target='_blank'>here</a>.
			Applications open twice a year, so hurry up!
		</Col>
	</Row>
</Container>;

export default About;