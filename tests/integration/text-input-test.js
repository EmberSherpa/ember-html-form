import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('text-input', 'Integration | Component | text input', {
  integration: true
});

test('values entered are correctly displayed', function(assert){
  assert.expect(2);
  this.set('title', '');
  this.set('content', '');
  this.on('input', () => {
    $( this ).trigger();
  });
  this.render(hbs`
    <section class="post">
        <header class="post-header">
            <h2 class="post-title">&lt;input type=&quot;text&quot;&gt;</h2>
        </header>

        <div class="pure-g post-description">
          <div class="pure-u-1 pure-u-md-1-3 pure-text">
            <input type="text"
              value={{title}}
              oninput={{action (mut title) value="target.value"}}
            />
            <div class="title">{{title}}</div>
          </div>
        </div>
    </section>
    <header class="post-header">
        <h2 class="post-title">&lt;textarea&gt;</h2>
    </header>

    <section class="post">
    <div class="pure-g post-description">
      <div class="pure-u-1 pure-u-md-1-3 pure-textbox">
        <textarea
          value={{content}}
          onkeyup={{action (mut content) value="target.value"}}
          onchange={{action (mut content) value="target.value"}}
        />
        <div class="content">{{content}}</div>
      </div>
    </div>
    </section>
    `);
    Ember.run(() => {
      this.$('input[type=text]').val('foo');
    });
    this.set('title', 'foo');
    this.$('textarea').val('bar');
    this.set('content', 'bar');
    assert.equal(this.$('.title').text(), 'foo', 'foo');
    assert.equal(this.$('.content').text(), 'bar', 'bar');

});
