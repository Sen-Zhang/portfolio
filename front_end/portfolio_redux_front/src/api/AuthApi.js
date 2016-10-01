import agent from './agent';

export default {
  signIn: (creds) =>
    agent.post('/sign_in', creds)
};
