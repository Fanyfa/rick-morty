import Home from 'pages/Home';
import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(React.createElement(Home), document.getElementById('root'));
serviceWorker.unregister();
