Meteor.publish('posts', function() {
  return Posts.find();
})

Meteor.publish('blogs', function() {
  return Blogs.find();
})
