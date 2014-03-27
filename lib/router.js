Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    // show spinner until posts are laoded from Mongo
    return Meteor.subscribe('posts');
  }
});

Router.map(function() {
  this.route('postsList', { path:'/'})
});

