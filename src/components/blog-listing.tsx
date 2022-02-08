import { useEffect, useState } from 'react';
import {
	Row,
	Col,
	Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

import { getBlogs } from '../services/blog';
import Loading from './loading';
import { Blog } from '../schema/blog';
import './blogs.css';

const Listing = ({ username }: {
	username?: string
}) => {
	const [list, setList] = useState<Blog[]>([]);
	const [page, setPage] = useState<number>(0);
	const [last, setLast] = useState<boolean>(false);

	const updatePage = async (num: number) => {
		setPage(num);
		const [lst, lastPage] = await getBlogs(num, username);
		setLast(lastPage);
		setList(lst);
	};

	const prevPage = async () => {
		if (page === 0)
			return;
		setList([]);
		await updatePage(page - 1);
	};
	const nextPage = async () => {
		if (last)
			return;
		setList([]);
		await updatePage(page + 1);
	};

	useEffect(() => {
		updatePage(0);
	}, []);

	if (list == null || list.length < 1)
		return <Loading>
			Loading posts...
		</Loading>;
	
	return <>
		<Row style={{
			minHeight: 400
		}}  className='mt-3 justify-content-center'>
			{list.map((post, i) => <Col key={i} xs='12' md='8'>
				<Link className='blog-post-title no-underline' to={`/blog/${post.user}/${post.id}`}>
					<h5 className='blog-post-title on-hover'>{ post.title }</h5>
				</Link>
				<div className='about-blog-post mb-3'>
					By <Link to={`/${post.user}`}>{ post.user }</Link> on { post.date }
					<br/>
					<div className='post-summary'>{ post.data }</div>
				</div>
			</Col>)}
		</Row>
		<Row className='mt-3 justify-content-center'>
			<Col xs='12' md='8' lg='6'>
				<Row>
					<Col>
						<Button
							color='danger'
							onClick={prevPage}
							style={{
								display: page !== 0 ? 'auto' : 'none'
							}}>
							Previous</Button>
					</Col>
					<Col className='text-end'>
						<Button
							color='primary'
							onClick={nextPage}
							style={{
								display: last ? 'none' : 'auto'
							}}>
							Next
						</Button>
					</Col>
				</Row>
			</Col>
		</Row>
	</>;
};

export default Listing;