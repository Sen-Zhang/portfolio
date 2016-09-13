import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    redirectToHome() {
      location.replace('/');
    }
  }
});
