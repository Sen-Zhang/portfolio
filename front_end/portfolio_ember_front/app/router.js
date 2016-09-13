import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('sessions', function () {
    this.route('new');
  });

  this.route('initiatives', function () {
    this.route('new');
    this.route('show', {path: '/:initiative_id'});
  });

  this.route('support');
  this.route('settings');

  this.route('page-not-found', {path: '/*wildcard'});
});

export default Router;
