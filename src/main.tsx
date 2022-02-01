import React from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import './index.css';
import App from './app';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);