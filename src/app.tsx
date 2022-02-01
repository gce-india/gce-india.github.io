import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import './app.css';
import { Header, Footer, Meta } from './components';
import Routes from './routes';

const App = () => {
	return <BrowserRouter>
		<HelmetProvider>
			<Meta
				description='The official homepage of GitHub Campus Experts India. Campus Experts are student leaders that strive to build and support diverse and inclusive spaces in technical communities.'
				keywords={['GitHub', 'GitHub Campus', 'Campus Experts', 'India']}
				/>
			<Header />
			<Routes />
			<Footer />
		</HelmetProvider>
	</BrowserRouter>;
};

export default App;