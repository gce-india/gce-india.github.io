import {
	Route,
	Routes
} from 'react-router-dom';

import { Main } from './components';

const CustomRoutes = () => <Routes>
	<Route path='/' element={<Main />} />
	<Route path='/discover' element={<>Hi</>} />
</Routes>;

export default CustomRoutes;