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

  this.route('page-not-found', {path: '/*wildcard'});
});

export default Router;
