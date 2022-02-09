import axios from 'axios';
import yaml from 'yaml';
import day from 'dayjs';
import utc from 'dayjs/plugin/utc';
// @ts-ignore
import metadataParser from 'markdown-yaml-metadata-parser';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import { Blog } from '../schema/blog';
import { PUBLIC_DATE_FORMAT, DATE_FORMAT, UTC_OFFSET } from '../constants';

day.extend(utc);
day.extend(customParseFormat);
day.extend(localizedFormat);
day().utcOffset(UTC_OFFSET);

const getBlogs_ = async (page: number = 0, username?: string) => {
	try {
		let route = `/resources/blogs/${page}.yml`;
		if (username)
			route = `/users/${username}/blogs/index/${page}.yml`;

		const resp = await axios.get(route);
		const data = yaml.parse(resp.data);
		const list: Blog[] = data.blogs
			.map((blog: any) => ({
				id: blog.id,
				user: username ?? blog.author,
				title: blog.title,
				date: day(blog.date, DATE_FORMAT).format(PUBLIC_DATE_FORMAT),
				data: blog.summary
			}));

		return [list, data.lastPage];
	} catch (e) {
		return [[], true];
	}
};

const getBlog_ = async (postID: string, username: string) => {
	try {
		const route = `/users/${username}/blogs/${postID}.md`;
		const resp = await axios.get(route);

		const {
			metadata: info,
			content: markdown
		}: {
			metadata: Blog,
			content: string
		} = metadataParser(resp.data);

		const blog: any = {
			id: postID,
			user: username,
			title: info.title,
			date: day(info.date, DATE_FORMAT).format(PUBLIC_DATE_FORMAT),
			data: markdown
		};

		return blog;
	} catch (e) {
		return null;
	}
};

const parseAndLinkMentions_ = (text: string) => text.replace(/@([A-Za-z0-9\-_]+)/g, `[$&](https://github.com/$1)`);

export const getBlogs = getBlogs_;
export const getBlog = getBlog_;
export const parseAndLinkMentions = parseAndLinkMentions_;