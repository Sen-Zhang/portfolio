import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('sessions.new');
      return false;
    }
  },

  actions: {
    redirectToSignIn() {
      this.transitionTo('sessions.new');
    }
  }
});