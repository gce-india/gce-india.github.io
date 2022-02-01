import { Helmet } from 'react-helmet-async';

import { title as mainTitle } from '../constants';

interface MetaData {
	title?: string,
	description?: string,
	keywords?: string[]
}

const Meta = ({
	title,
	description,
	keywords
}: MetaData) => <Helmet>
	{
		title != null ?
			<title>{ `${mainTitle} - ${title}` }</title>
			: <title>{ mainTitle }</title>
	}
	{
		description != null ?
			<meta name='description' content={description} />
			: ''
	}
	{
		keywords != null ?
			<meta name='keywords' content={keywords.map(k => k.toLocaleLowerCase()).join(', ')}/>
			: ''
	}
</Helmet>;

export default Meta;