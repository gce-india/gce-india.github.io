import { useEffect, useState } from 'react';
import {
	Container,
	Row,
	Col
} from 'reactstrap';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import rehypeRaw from 'rehype-raw';

import { title } from '../constants';
import Meta from './meta';
import Loading from './loading';
import { Blog } from '../schema/blog';
import { getBlog } from '../services/blog';
import './blogs.css';

const Post = () => {
	const { username, postID } = useParams();
	const [blog, setBlog] = useState<Blog | null | boolean>(null);

	useEffect(() => {
		(async () => {
			const b = await getBlog(postID!, username!);
			if (b == null) {
				setBlog(false);
				return;
			}
			setBlog(b as Blog);
		})();
	}, []);

	if (blog === null)
		return <Loading>
			Loading post...
		</Loading>;

	if (typeof blog === 'boolean')
		return <Container fluid='md mt-5 mb-5'>
		<Meta
			title={`Blog - Not Found`}
			description='The GitHub Campus Experts India Blog. Campus Experts are student leaders that strive to build and support diverse and inclusive spaces in technical communities.'
		/>
		<Row className='justify-content-center mt-auto mb-auto'>
			<Col xs='12'>
				<Row className='justify-content-center'>
					<Col className='d-flex justify-content-center'>
						<h1 className='mb-3'>Blog Post - Not Found</h1>
					</Col>
				</Row>
				<Row className='justify-content-center'>
					<Col className='d-flex justify-content-center'>
						Post not found. Try checking the&nbsp;<Link to={`/${username}`}>profile</Link>.
					</Col>
				</Row>
			</Col>
		</Row>
	</Container>;

	return <Container fluid='md mt-5 mb-5'>
		<Meta
			title={`Blog - ${blog.title} - ${username}`}
			description='The GitHub Campus Experts India Blog. Campus Experts are student leaders that strive to build and support diverse and inclusive spaces in technical communities.'
		/>
		<Row className='justify-content-center mt-auto mb-auto'>
			<Col xs='12'>
				<Link className='blog-post-title no-underline' to={window.location.pathname}>
					<h1 className='mb-3 blog-post-title on-hover'>{ blog.title }</h1>
				</Link>
				<h4 className='mb-3'>
					By <Link to={`/${username}`}>{ username }</Link> on { blog.date }
				</h4>
			</Col>
		</Row>
		<Row className='justify-content-center mt-auto mb-auto'>
			<Col xs='12'>
			<Markdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeRaw, rehypeSanitize]}
					linkTarget='_blank'>{ blog.data }</Markdown>
			</Col>
		</Row>
		<Row className='mt-3 justify-content-center'>
			<Col xs='12' className='opacity-50'>
			Are you also an Indian campus expert? <a href='https://github.com/gce-india/gce-india.github.io' target='_blank' rel="noreferrer">Start your own blog</a> on the { title } website.
			</Col>
		</Row>
	</Container>;
};

export default Post;