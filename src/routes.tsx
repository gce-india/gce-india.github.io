import {
	Route,
	Routes
} from 'react-router-dom';

import {
	Main,
	About,
	Contact,
	Discover,
	New,
	NotFound,
	Blogs,
	BlogPost
} from './components';

const CustomRoutes = () => <Routes>
	<Route path='/' element={<Main />} />
	<Route path='/blog' element={<Blogs />} />
	<Route caseSensitive path='/blog/:username' element={<Blogs />} />
	<Route caseSensitive path='/blog/:username/:postID' element={<BlogPost />} />
	<Route path='/discover' element={<Discover />} />
	<Route path='/about' element={<About />} />
	<Route path='/contact' element={<Contact />} />
	<Route caseSensitive path='/global/:username' element={<New fallback />} />
	<Route caseSensitive path='/:username' element={<New />} />
	<Route path='*' element={<NotFound />} />
</Routes>;

export default CustomRoutes;