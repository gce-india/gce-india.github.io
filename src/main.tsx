import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import './index.css';
import App from './app';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);