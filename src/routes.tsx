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
	Blogs
} from './components';

const CustomRoutes = () => <Routes>
	<Route path='/' element={<Main />} />
	<Route path='/blog' element={<Blogs />} />
	<Route path='/blog/:username' element={<Blogs />} />
	<Route path='/discover' element={<Discover />} />
	<Route path='/about' element={<About />} />
	<Route path='/contact' element={<Contact />} />
	<Route path='/global/:username' element={<New fallback />} />
	<Route path='/:username' element={<New />} />
	<Route path='*' element={<NotFound />} />
</Routes>;

export default CustomRoutes;