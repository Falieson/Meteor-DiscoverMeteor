Meteor.publish('posts', function(author) {
  return Posts.find();
});

Meteor.publish('comments', function() {
  return Comments.find();
});
