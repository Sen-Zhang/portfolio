import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  init() {
    this._super(...arguments);
    this.signedIn = this.get('session.isAuthenticated');
    this.userName = this.get('session.user');
  },

  actions: {
    logout() {
      this.get('session').invalidate();
      location.replace('/');
    }
  }
});
