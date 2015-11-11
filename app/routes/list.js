import Ember from 'ember';
export default Ember.Route.extend({
  model() {

    return {
      tree: [
        {
          title: 'root 1',
          children: [
            {
              title: 'child 1',
            },
            { title: 'child 2' },
            {
              title: 'child 3',
            },
            {
              title: 'child 4',
            },
            {
              title: 'child 4',
              children: [
                { title: 'sub child 1' },
                { title: 'sub child 2' },
                { title: 'sub child 3' },
                { title: 'sub child 4' }
              ]
            },
            {
              title: 'child 5',
              children: [
                { title: 'sub child 1' },
                { title: 'sub child 2' },
                { title: 'sub child 3' },
                { title: 'sub child 4' }
              ]
            }
          ]
        },
        {
          title: 'root 2',
          children:[
            { title: 'sub child 1' },
            { title: 'sub child 2' },
            { title: 'sub child 3' },
            { title: 'sub child 4' }
          ]
        }
      ]
    };
  }
});
