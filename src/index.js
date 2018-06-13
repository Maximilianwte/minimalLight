import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Install and import babel-polyfill to get react ready to fetch as google.
import 'babel-polyfill';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
