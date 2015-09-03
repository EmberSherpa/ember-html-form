import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('radio-input', 'Integration | Component | radio input', {
  integration: true
});

test('clicking a radio input changes state value', function(assert){
  assert.expect(2);
  this.set('units', [
    { id: 'cm', name: 'Centimeters' },
    { id: 'in', name:'Inches' }
  ]);
  this.set('activeUnit', 'cm');
  this.on('setActiveUnit', (unit) => {
    this.set('activeUnit', unit);
  });

  this.render(hbs`
    {{#each units as |unit|}}
      <label>
        <input  type="radio"
                name="radio-input"
                value="{{unit.id}}"
                onclick={{action "setActiveUnit" value="target.value"}}
                checked={{eq activeUnit unit.id}}>
                {{unit.name}}<br>
      </label>
    {{/each}}<br>
    <div class="unit">
        <p>Active measurement units are {{activeUnit}}</p>
    </div>
    `);
    assert.equal(this.$('.unit p').text(), 'Active measurement units are cm', 'Correct default value is displayed');
    Ember.run(() => {
      this.$('input[type=radio][value=in]').click();
    });
    assert.equal(this.$('.unit p').text(), 'Active measurement units are in', 'Inches are the active units after clicking');
});


// TODO: test that clicking a radio input changes state value
// TODO: test that providing default value sets correct radio input
