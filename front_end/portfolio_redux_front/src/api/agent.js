import request from 'superagent';
import store from '../stores/index';

const API_ROOT = 'http://api.lvh.me:3000/v1';

const session = store.getState().session;

const requestPlugin = req => {
  req
    .withCredentials()
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');

  if (session) {
    req.set('authorization', session.auth_token);
  }
};

export default {
  del: path =>
    request.del(`${API_ROOT}${path}`).use(requestPlugin),
  get: path =>
    request.get(`${API_ROOT}${path}`).use(requestPlugin),
  put: (path, params) =>
    request.put(`${API_ROOT}${path}`).send(params).use(requestPlugin),
  post: (path, params) =>
    request.post(`${API_ROOT}${path}`).send(params).use(requestPlugin)
};
