import Ember from 'ember';

export default Ember.Controller.extend({

  // blogs is array of blog {author, title, body}
  blogs: [{
    author: 'author1',
    title: 'ember',
    body: 'ember details... '

  }],

  detail: false,

  actions: {
    doRead() {
      // reads particular blog
      this.toggleProperty('detail');
    }
  }
});
