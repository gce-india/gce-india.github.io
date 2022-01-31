import {
	Route,
	Routes
} from 'react-router-dom';

import { Main } from './components';
import NotFound from './components/404';

const CustomRoutes = () => <Routes>
	<Route path='/' element={<Main />} />
	<Route path='/discover' element={<>Hi Discover!</>} />
	<Route path='/about' element={<>Hi About!</>} />
	<Route path='/contact' element={<>Hi Contact!</>} />
	<Route path='*' element={<NotFound />} />
</Routes>;

export default CustomRoutes;