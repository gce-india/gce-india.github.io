import {
	Container,
	Row,
	Col
} from 'reactstrap';
import { useParams } from 'react-router-dom';

import { title } from '../constants';
import Meta from './meta';
import Listing from './blog-listing';
import './blogs.css';

const Blogs = () => {
	const { username } = useParams();

	return <Container fluid='md mt-5 mb-5'>
		<Meta
			title={
				username ? `${username} - Blog` :'Blog'
			}
			description='The GitHub Campus Experts India Blog. Campus Experts are student leaders that strive to build and support diverse and inclusive spaces in technical communities.'
		/>
		<Row className='justify-content-center mt-auto mb-auto'>
			<Col xs='12' md='12' lg='10'>
				<h1 className='mb-3'>Blog</h1>
				<h4 className='mb-3'>Recent posts</h4>
			</Col>
		</Row>
		<Listing username={username} />
		<Row className='mt-3 justify-content-center'>
			<Col xs='12' md='12' lg='10' className='opacity-50'>
			Are you also an Indian campus expert? <a href='https://github.com/gce-india/gce-india.github.io' target='_blank' rel="noreferrer">Start your own blog</a> on the { title } website.
			</Col>
		</Row>
	</Container>;
};

export default Blogs;