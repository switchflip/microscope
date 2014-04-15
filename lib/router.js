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

  this.route('postSubmit', {
    path: '/submit'
  })

  this.route('blogPage', {
    path: '/blog'
  });

  this.route('aboutPage', {
    path: '/about'
  });
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.logginIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
    this.stop();
  }
}

Router.onBeforeAction(requireLogin, {only: 'postSubmit'})

