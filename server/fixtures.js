if (Blogs.find().count() === 0) {
  Blogs.insert({
    title: 'Introducing Telescope',
    text: 'Sacha Greif',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Blogs.insert({
    title: 'Meteor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, aut, perspiciatis, accusamus impedit consequuntur facilis autem culpa tempore fugit enim eligendi omnis quam excepturi sapiente aliquid! Cupiditate, labore aliquid distinctio!',
    url: 'http://meteor.com'
  });

  Blogs.insert({
    title: 'The Meteor Book',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, aperiam, assumenda voluptatum ipsam aliquam consectetur facilis officia quo illo provident ipsa ex deserunt optio minus officiis magni est rerum nihil!',
    url: 'http://themeteorbook.com'
  });

  Blogs.insert({
    title: 'Aaron Wynia',
    text: 'qLorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, consectetur, doloremque, minus maxime delectus officia suscipit voluptas repellendus ipsa ut minima sint nulla quos aut enim laborum placeat aliquid hic.',
    url: 'http://www.aaronwynia.tumblr.com'
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

