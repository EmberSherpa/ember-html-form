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
  andThen(function() {
    assert.equal(currentURL(), '/checkboxes');
  });

  click('input[type=checkbox][value=news]');
  andThen(function() {
    assert.equal($('.item-value').text().trim(), 'news,', 'news checkbox is checked');
  });

  click('input[type=checkbox][value=announcements]');
  andThen(function() {
    assert.equal($('.item-value').text().trim(), 'news, announcements,', '2 checkboxes checked');
  });
});
