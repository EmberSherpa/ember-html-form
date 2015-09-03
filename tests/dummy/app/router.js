import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('radio-input');
  this.route('checkboxes');
  this.route('many-checkboxes');
  this.route('text-input');
  this.route('select-input');
});

export default Router;
