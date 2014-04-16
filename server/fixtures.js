if (Blogs.find().count() === 0) {
  Blogs.insert({
    title: 'The Meteor Book',
    blogText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, aperiam, assumenda voluptatum ipsam aliquam consectetur facilis officia quo illo provident ipsa ex deserunt optio minus officiis magni est rerum nihil!',
    pubDate: new Date()
  });

  Blogs.insert({
    title: 'Aaron Wynia',
    blogText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, consectetur, doloremque, minus maxime delectus officia suscipit voluptas repellendus ipsa ut minima sint nulla quos aut enim laborum placeat aliquid hic.',
    pubDate: new Date()
  });
}


if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    author: 'Sacha Greif',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor',
    author: 'Tom Coleman',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com'
  });

  Posts.insert({
    title: 'Aaron Wynia',
    author: 'Aaron Wynia',
    url: 'http://www.aaronwynia.tumblr.com'
  });
}
