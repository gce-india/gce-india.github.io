import { BrowserRouter } from 'react-router-dom';

import './app.css';
import { Header, Footer } from './components';
import Routes from './routes';

const App = () => {
	return <BrowserRouter>
		<Header />
		<Routes />
		<Footer />
	</BrowserRouter>;
};

export default App;