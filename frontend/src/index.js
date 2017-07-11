import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const ENTRIES = [
  {id: 1, customer: 'customer1', hourly_rate: 10, length: 60},
  {id: 2, customer: 'customer2', hourly_rate: 15, length: 120},
  {id: 3, customer: 'customer3', hourly_rate: 10, length: 30},
];

ReactDOM.render(
    <App entries={ENTRIES}/>,
    document.getElementById('root'),
);
registerServiceWorker();
