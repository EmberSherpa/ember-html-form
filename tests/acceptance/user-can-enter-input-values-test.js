import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | user can enter input values', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('users can enter values in textarea and text input fields', function(assert) {
  visit('/text-input');
  andThen(function() {
    assert.equal(currentURL(), '/text-input');
    // assert original values
  });
  Ember.run(() => {
    fillIn('input[type=text]', 'foo');
  });
  fillIn('textarea', 'bar');
  keyEvent('input[type=text]', 'input', 13);
  andThen(function(){
    assert.equal($('.input-value').text().trim(), 'foo', 'text "foo" has been entered into test input');
    assert.equal($('.textarea-value').text(), 'bar', 'text "bar" has been entered into textarea');
  });
});
