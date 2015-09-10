import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | many checkboxes test', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /many-checkboxes', function(assert) {
  visit('/many-checkboxes');

  andThen(function() {
    assert.equal(currentURL(), '/many-checkboxes');
  });

  click('input[type=checkbox][value=item-1]');

  andThen(function() {
    assert.equal(find('ul.list-test li:first').text().trim(), 'item-1', 'Item-1 checkbox checked');
  });

  click('input[type=checkbox][value=item-2]');

  andThen(function() {
    assert.equal(find('ul.list-test li:last').text().trim(), 'item-2', 'Item-2 checkbox checked');
  });
});
