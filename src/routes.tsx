import {
	Route,
	Routes
} from 'react-router-dom';

import { Main, About, Contact, NotFound } from './components';

const CustomRoutes = () => <Routes>
	<Route path='/' element={<Main />} />
	<Route path='/discover' element={<>Hi Discover!</>} />
	<Route path='/about' element={<About />} />
	<Route path='/contact' element={<Contact />} />
	<Route path='*' element={<NotFound />} />
</Routes>;

export default CustomRoutes;