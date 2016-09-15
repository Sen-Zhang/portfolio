import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  authPath: config.authPath,
  site: location.hostname.split('.')[0],
  session: {},

  isAuthenticated: Ember.computed('session', function () {
    return this._getToken() !== undefined;
  }),

  token: Ember.computed('session', function () {
    return this._getToken();
  }),

  user: Ember.computed('session', function () {
    return this._getUser();
  }),

  authenticate(creds) {
    var _this = this;

    return new Ember.RSVP.Promise((resolve) => {
      Ember.$.ajax({
        method: 'POST',
        url: _this.authPath,
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
  }
});