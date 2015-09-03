import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('checkbox-input', 'Integration | Component | checkbox-input', {
  integration: true
});

test('clicking checkboxes changes list of selected checkboxes', function(assert){
  let checkboxCategories = [
    { id: 'news', name: 'News' },
    { id: 'announcements', name: 'Announcements' },
    { id: 'videos', name: 'Videos' }
  ];
  this.set('checkboxCategories', checkboxCategories);
  this.set('categories', ['news']);
  this.on('updateCategories', (value) => {
    let categories = this.get('categories');
    if (categories.contains(value)) {
      categories.removeObject(value);
    } else {
      categories.pushObject(value);
    }
  });
  this.render(hbs`
    <div class="row">
      <h4>Categories</h4>
      {{#each checkboxCategories as |category|}}
        <label>
          <input
            type="checkbox"
            name="categories"
            value={{category.id}}
            onclick={{action "updateCategories" value="target.value"}}
            checked={{array-contains categories category.id}}
            > {{category.name}}
        </label>
      {{/each}}
    </div>

    {{#if selectedCategories}}
    <div class="selected">
      <p>Selected categories are: {{selectedCategories}}</p>
    </div>
    {{/if}}
    `);
  assert.equal(this.$('input[type=checkbox][value=news]').prop('checked'), true, 'news category is checked');
  assert.equal(this.$('input[type=checkbox][value=announcements]').prop('checked'), false, 'announcements category is not checked');
  assert.equal(this.$('input[type=checkbox][value=videos]').prop('checked'), false, 'videos category is not checked');
  Ember.run(() => {
    this.$('input[type=checkbox][value=announcements]').click();
  });
  this.set('selectedCategories', this.get('categories').join(', '));
  assert.equal(this.$('input[type=checkbox][value=announcements]').prop('checked'), true, 'announcements category is checked');
  assert.equal(this.$('.selected p').text(), 'Selected categories are: news, announcements', 'announcements category was added');
});
