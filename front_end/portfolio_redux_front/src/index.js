import React from 'react';
import { render } from 'react-dom';
import Root from './components/layouts/Root';
import store from './stores/index';

/* css */
import './styles/index';

/* 3rd party js libs */
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

render(
  <Root store={store}/>,

  document.getElementById('app')
);
