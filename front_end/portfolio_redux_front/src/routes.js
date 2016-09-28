import React from 'react';
import { Route } from 'react-router';

import AppContainer from './components/containers/AppContainer';
import SignIn from './components/SignIn';

const routes = (
  <Route path="/" component={AppContainer}>
    <Route path="/login" component={SignIn}/>
  </Route>
);

export default routes;
