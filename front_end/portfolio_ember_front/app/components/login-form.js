import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  loginFailure: false,

  actions: {
    authenticate: function () {
      var loginForm = this;

      loginForm.get('session')
        .authenticate(Ember.$.extend(
          loginForm.getProperties('email', 'password'),
          {account: location.hostname.split('.')[0]}))
        .then(function (success) {
          if (success) {
            loginForm.set('loginFailure', false);
            loginForm.sendAction('redirectToHome');
          } else {
            loginForm.set('loginFailure', true);
          }
        });
    }
  }
});