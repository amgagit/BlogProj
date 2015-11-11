import Ember from 'ember';

var Blog =  Ember.Controller.extend({
  blog : {
    author: 'author',
    title: 'title',
    body: 'post your blog',
  },

  actions: {
    doPost() {
      // post to db
    }
  }
});

export default Blog;
