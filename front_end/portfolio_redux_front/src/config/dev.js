import baseConfig from './base';

const config = {
  appEnv: 'dev',
  apiHost: 'http://api.lvh.me:3000/v1'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
