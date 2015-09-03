import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('radio-input');
  this.route('checkbox-input', function(){
    this.route('many-inputs');
  });
  this.route('text-input');
  this.route('select-input');
});

export default Router;
