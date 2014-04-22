Meteor.publish('posts', function() {
  return Posts.find();
})

Meteor.publish('blogs', function() {
  return Blogs.find();
})

Meteor.publish('comments', function(postId) {
  return Comments.find({postId: postId});
});
