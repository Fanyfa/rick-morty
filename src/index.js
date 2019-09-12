import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.scss';
import * as serviceWorker from './serviceWorker';
import AppProvider from './providers/App';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
serviceWorker.unregister();
