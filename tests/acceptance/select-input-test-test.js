import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | select input test', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('users can select a dropdown value', function(assert) {
  visit('/select-input');
  fillIn('.select-input select', 'inches');

  andThen(function() {
    assert.equal(currentURL(), '/select-input');
    assert.equal($('.select-value').text(), 'inches', 'proper value selected "inches"');
  });
});
