import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import Header from './Header';
import New from '../containers/New';
import Overview from '../containers/Overview';
import Manage from '../containers/Manage';

import './App.css';

const App = ({ children }) => (
    <div className="AppContainer ui main text container">
      <Header />
      {children}

      <Redirect to="/new" push/>
      <Route path="/new" component={New} />
      <Route path="/overview" component={Overview} />
      <Route path="/manage" component={Manage} />
    </div>
);

export default App;
