import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const app = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={App}/>
      </BrowserRouter>
    </Provider>,
    app,
);
registerServiceWorker();
