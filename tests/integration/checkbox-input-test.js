import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('checkbox-input', 'Integration | Component | checkbox-input', {
  integration: true
});

test('clicking checkboxes changes list of selected checkboxes', function(assert){
  let options = [
    { id: 'news', name: 'News' },
    { id: 'announcements', name: 'Announcements' },
    { id: 'videos', name: 'Videos' }
  ];
  this.set('options', options);
  this.set('selection', ['news']);
  this.on('updateSelection', (value) => {
    let selection = this.get('selection');
    if (selection.contains(value)) {
      selection.removeObject(value);
    } else {
      selection.pushObject(value);
    }
  });
  this.render(hbs`
    <div class="row">
      <h4>Categories</h4>
      {{#each options as |option|}}
        <label>
          <input
            type="checkbox"
            name="options"
            value="{{option.id}}"
            onclick={{action "updateSelection" value="target.value"}}
            checked={{array-contains options option.id}}
            >{{option.name}}
        </label><br>
      {{/each}}
      </div>

    {{#if selection}}
    <div class="selected">
      <p>Selected categories are: {{selectedOptions}}</p>
    </div>
    {{/if}}
    `);
  assert.equal(this.$('input[type=checkbox][value=news]').prop('checked'), false, 'news category is not checked');
  assert.equal(this.$('input[type=checkbox][value=announcements]').prop('checked'), false, 'announcements category is not checked');
  assert.equal(this.$('input[type=checkbox][value=videos]').prop('checked'), false, 'videos category is not checked');
  Ember.run(() => {
    var checkbox = this.$('input[type=checkbox][value=announcements]').trigger('click');
    this.$('checkbox').click();
  });
  this.set('selectedOptions', this.get('selection').join(', '));
  assert.equal(this.$('input[type=checkbox][value=announcements]').prop('checked'), true, 'announcements category is checked');
  assert.equal(this.$('.selected p').text(), 'Selected categories are: news, announcements', 'announcements category was added');
});
