import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('list', { path: '/list' });
  this.route('post', { path: '/post' });
  this.route('list-of-drafts', {path: '/drafts'});
});

export default Router;
