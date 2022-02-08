import { useEffect, useState } from 'react';
import {
	Container,
	Row,
	Col
} from 'reactstrap';
import { Link } from 'react-router-dom';

import { getBlogs } from '../services/blog';
import Loading from './loading';
import { title } from '../constants';
import Meta from './meta';
import { Blog } from '../schema/blog';
import './blogs.css';

const Blogs = () => {
	const [list, setList] = useState<Blog[]>([]);

	useEffect(() => {
		(async () => {
			setList(await getBlogs());
		})();
	}, []);

	if (list.length < 1)
		return <Loading>
			Loading posts...
		</Loading>;
	
	return <Container fluid='md mt-5 mb-5'>
		<Meta
			title='Blog'
			description='The GitHub Campus Experts India Blog. Campus Experts are student leaders that strive to build and support diverse and inclusive spaces in technical communities.'
		/>
		<Row className='justify-content-center mt-auto mb-auto'>
			<Col xs='12' md='8'>
				<h1 className='mb-3'>Blog</h1>
				<h4 className='mb-3'>Recent posts</h4>
			</Col>
		</Row>
		<Row style={{
			minHeight: 400
		}}  className='mt-3 justify-content-center'>
			{list.map((post, i) => <Col key={i} xs='12' md='8'>
				<Link className='blog-post-title no-underline' to={`/blog/${post.user}/${post.id}`}>
					<h5 className='blog-post-title on-hover'>{ post.title }</h5>
				</Link>
				<div className='about-blog-post mb-3'>
					By <Link to={`/${post.user}`}>{ post.user }</Link> at { post.date }
					<br/>
					<div className='post-summary'>{ post.data }</div>
				</div>
			</Col>)}
		</Row>
		<Row className='mt-3 justify-content-center'>
			<Col xs='12' md='8' className='opacity-50'>
			Are you also an Indian campus expert? <a href='https://github.com/gce-india/gce-india.github.io' target='_blank' rel="noreferrer">Start your own blog</a> on the { title } website.
			</Col>
		</Row>
	</Container>;
};

export default Blogs;