import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('text-input', 'Integration | Component | text input', {
  integration: true
});

test('value selected is displayed', function(assert){
assert.expect(3);
this.set('units', [
  'centimeters',
  'inches'
]);
this.set('activeUnit', 'centimeters');
this.render(hbs`
  <div class="pure-g post-description">
    <div class="pure-u-1 pure-u-md-1-6">
      <select onchange={{action (mut activeUnit) value='target.value'}}>
        {{#each units as |unit|}}
          <option value={{unit}} selected={{eq activeUnit unit}}>{{unit}}</option>
        {{/each}}
      </select>
      <div class="select">{{activeUnit}}</div>
    </div>
  </div>
  `);
  assert.equal(this.$('.select').text(), 'centimeters', 'default value "centimeters" is displayed');
  this.$('.pure-u-1 select').val('inches');
  assert.equal(this.$('.pure-u-1 select').prop('selected', true).val(), 'inches', 'inches selected');
  this.set('activeUnit', 'inches');
  assert.equal(this.$('.select').text(), 'inches', 'selected value is now "inches"');
});
