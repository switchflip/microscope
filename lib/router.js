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

  this.route('postPage', {
    path: '/posts/:_id',
    data: function() { return Posts.findOne( this.params._id ); }
  });

  this.route('about', {
    path: '/about'
  })
});

