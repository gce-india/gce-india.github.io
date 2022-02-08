import axios from 'axios';
import yaml from 'yaml';
import day from 'dayjs';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import { Blog } from '../schema/blog';
import { PUBLIC_DATE_FORMAT, DATE_FORMAT, UTC_OFFSET } from '../constants';

day.extend(utc);
day.extend(customParseFormat);
day.extend(localizedFormat);
day().utcOffset(UTC_OFFSET);

const getBlogs_ = async (page: number = 0) => {
	const resp = await axios.get(`/resources/blogs/${page}.yml`);
	const list: Blog[] = yaml.parse(resp.data).blogs
		.map((blog: any) => ({
			id: blog.id,
			user: blog.author,
			title: blog.title,
			date: day(blog.date, DATE_FORMAT).format(PUBLIC_DATE_FORMAT),
			data: blog.summary
		}));

	return list;
};

export const getBlogs = getBlogs_;