import request from 'superagent';
import config from 'config';
import store from '../stores/index';
import { signOut } from '../actions/session';

const API_ROOT = config.apiHost;
const session = store.getState().session;

const responseBody = res => res.body;
const responseErrorHandler = (err) => {
  if (err.status === 401) {
    store.dispatch(signOut());
  }
};
const requestPlugin = req => {
  req
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');

  if (session) {
    req.set('Authorization', session.token);
  }
};

export default {
  del: path =>
    request.del(`${API_ROOT}${path}`)
      .use(requestPlugin)
      .then(responseBody, responseErrorHandler),
  get: path =>
    request.get(`${API_ROOT}${path}`)
      .use(requestPlugin)
      .then(responseBody, responseErrorHandler),
  put: (path, params) =>
    request.put(`${API_ROOT}${path}`)
      .send(params)
      .use(requestPlugin)
      .then(responseBody, responseErrorHandler),
  post: (path, params) =>
    request.post(`${API_ROOT}${path}`)
      .send(params)
      .use(requestPlugin)
      .then(responseBody, responseErrorHandler)
};
