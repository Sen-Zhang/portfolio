import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  site: location.hostname.split('.')[0],
  session: {},

  authenticate(creds) {
    var _this = this;

    return new Ember.RSVP.Promise((resolve) => {
      Ember.$.ajax({
        method: 'POST',
        url: config.auth_path,
        data: creds,
        dataType: 'json'
      }).then((res) => {
        if (res.auth_token) {
          _this._setSession({token: res.auth_token, user: res.user});
          resolve(_this.get('isAuthenticated'));
        } else {
          _this.invalidate();
          resolve(_this.get('isAuthenticated'));
        }
      }, () => {
        _this.invalidate();
        resolve(_this.get('isAuthenticated'));
      });
    });
  },

  invalidate() {
    this._setSession(null);
  },

  _getSession() {
    this.set('session', JSON.parse(localStorage.getItem(this.site)) || {});
    return this.get('session');
  },

  _setSession(data) {
    this.set('session', data);
    localStorage.setItem(this.site, JSON.stringify(data));
  },

  _getToken() {
    return this._getSession().token;
  },

  _getUser() {
    return this._getSession().user;
  },

  isAuthenticated: Ember.computed('session', function () {
    return this._getToken() !== undefined;
  }),

  user: Ember.computed(function () {
    return this._getUser();
  })
});
