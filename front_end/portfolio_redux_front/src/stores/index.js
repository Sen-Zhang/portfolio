import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import reducers from '../reducers/index';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  apiMiddleware
)(createStore);

const reduxStore = (initialState) => {
  const store = createStoreWithMiddleware(
    reducers,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // We need to require for hot reloadign to work properly.
      const nextReducer = require('../reducers');  // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

const store = reduxStore(loadState());

store.subscribe(throttle(() => {
  const session = store.getState().session;

  saveState({ session });

  if (!session.isAuthenticated && location.pathname !== '/login') {
    location.replace('/login');
  }
}, 1000));

export default store;
