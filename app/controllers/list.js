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

  showList: '',

  actions: {
    doRead(val) {
      // reads particular blog
    //  console.log(val);
      val.togglePropertyDetail();
    },

    listParticularPost() {
      let out = '';
      let posts = this.store.peekAll('post'); // GET /posts/;1

      let len = posts.get('length');
      for (let i = 0; i < len; i++) {
        let title = posts.objectAt(i).get('title');
        let body = posts.objectAt(i).get('body');
        out += (title + ' | ' + body + '\n');

      }
      console.log(out);
      this.set('showList', out);
    },

    postTitle: 'post title',
    postBody: 'post body',

    doPost() {
      let rec = this.store.createRecord('post', {
        title: this.get('postTitle'),
        body: this.get('postBody')
      });
      console.log(rec.get('title') + ' | ' + rec.get('body'));
    }

  }

});
