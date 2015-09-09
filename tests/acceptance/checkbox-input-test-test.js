import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | checkbox input test', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('users can select a checkbox', function(assert) {
  visit('/checkboxes');
  click($('input[type=checkbox][value=news]'));
  $('input[type=checkbox][value=news]').prop('checked', checked);

  andThen(function() {
    assert.equal(currentURL(), '/checkboxes');
  });
});
