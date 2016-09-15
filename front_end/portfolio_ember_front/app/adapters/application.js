import Ember from 'ember';
import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.apiHost,
  namespace: config.apiVersion,
  auth: Ember.inject.service('session'),

  headers: Ember.computed('auth.token', function () {
    return {
      "Authorization": `${this.get("auth.token")}`
    };
  })
});