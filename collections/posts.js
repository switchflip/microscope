// A collection is essentiall a subscription to a publictions
Posts = new Meteor.Collection('posts');

Posts.allow({
insert: function(userId, doc) {
    // only allow posting if you are logged in
return !! userId; }
});
