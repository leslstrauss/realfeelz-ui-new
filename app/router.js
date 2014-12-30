import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
	location: config.locationType
});

Router.map(function() {
	this.route('whatsreal');
	this.route('about');
  this.route('fullpage');
	this.route('sticky');
});

export default Router;