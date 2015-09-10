import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | radio input test', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('clicking a radio input sets a value', function(assert) {
  visit('/radio-input');

  andThen(function() {
    assert.equal(currentURL(), '/radio-input');
  });

  click('input[type=radio][value=in]');

  andThen(function() {
    assert.equal($('.active-unit p').text(), 'in', 'Inches set as active units value');
  });
});
