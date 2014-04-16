Blogs = new Meteor.Collection('blogs');

Meteor.methods({
  blog: function(blog) {

    var user = Meteor.user();

    var blogPost = _.extend(_.pick(blog, 'title', 'blogText'), {
      title: blog.title,
      blogText: blog.blogText,
      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });

    debugger;

    var blogPostId = blog.insert(blogPost);

    return blogPostId;
  }
});
