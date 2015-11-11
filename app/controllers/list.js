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

  actions: {
    doRead(val) {
      // reads particular blog
    //  console.log(val);
      val.togglePropertyDetail();
    }
  }
});
