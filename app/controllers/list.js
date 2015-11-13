import Ember from 'ember';

export default Ember.Controller.extend({

  // blogs is array of blog {author, title, body}
  blogs: [
    Ember.Object.create({
      author: 'author1',
      title: 'ember',
      body: 'ember details... ',
      detail: false,

      togglePropertyDetail() {
        if (this.get('detail')) {
          this.set('detail', false);
        } else {
          this.set('detail', true);
        }
      }
    }),

    Ember.Object.create({
      author: 'author2',
      title: 'ember-cli',
      body: 'ember-cli details...',
      detail: false,

      togglePropertyDetail() {
        if (this.get('detail')) {
          this.set('detail', false);
        } else {
          this.set('detail', true);
        }
      }
    })
  ],

  postTitle: 'post title',
  postBody: 'post body',
  postTitleBody : Ember.computed('postTitle', 'postBody', function() {
    //
    let posts = this.store.peekAll('post');
    for (let i = 0; i < posts.get('length'); i++) {

      this.get('showList').addObject(posts.objectAt(i));
    }
    return ` ${this.get('postTitle')} ${this.get('postBody')} `;
  }),

  postAuthor: Ember.computed.oneWay('postTitle'),

  showList: Ember.A(),

  actions: {
    doRead(val) {
      // reads particular blog
    //  console.log(val);
      val.togglePropertyDetail();
    },

    doPost() {
      let rec = this.store.createRecord('post', {
        title: this.get('postTitle'),
        body: this.get('postBody')
      });
      console.log(rec.get('title') + ' | ' + rec.get('body'));
    }

  }

});
