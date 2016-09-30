import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import AppContainer from './components/containers/AppContainer';
import Home from './components/pages/Home';
import SignIn from './components/pages/sign_in/SignIn';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRedirect to="/home"/>
    <Route path="/home" component={Home}/>
    <Route path="/login" component={SignIn}/>
  </Route>
);

export default routes;
