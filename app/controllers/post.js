import Ember from 'ember';
import DS from 'ember-data';

var Blog =  Ember.Controller.extend({
  blog : {
    author: 'author',
    title: 'title',
    body: 'post your blog',
  },

  actions: {
    doPost() {
      let rec = this.store.createRecord('post', {
        title: 'Rails is Omakase',
        body: 'Lorem ipsum'
      });
      //rec.save();

      console.log('created a post');
      console.log(rec);

     /* this.store.findRecord('user', 1).then(function(user) {
        post.set('author', user);
      });*/
    }
  }
});

export default Blog;
