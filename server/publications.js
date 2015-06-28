Meteor.publish('posts', function(author) {
  return Posts.find({flagged: false, author: author});
});

Meteor.publish('allPosts', function(){
  return Posts.find();
});
