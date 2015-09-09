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
  fillIn('.pure-textbox input', 'foo');
  fillIn('.pure-textarea textarea', 'bar');
  andThen(function() {
    assert.equal(currentURL(), '/text-input');
  });

  keyEvent('input[type=text]', 'input', 13).then(function(){
      assert.equal($('.title').text(), 'foo', 'text "foo" has been entered into test input');
      assert.equal($('.contents').text(), 'bar', 'text "bar" has been entered into textarea');
  });
});
