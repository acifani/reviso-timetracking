import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
import store from '../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter><App /></MemoryRouter>
      </Provider>,
      div);
});
