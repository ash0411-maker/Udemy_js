let users = [
  {name: "太郎"},
  {name: "次郎"},
  {name: "三郎"}
];

for (let i = 0; i < users.length; i++) {
  if(users[i].name === "次郎") {
    user = users[i]
    break;
  }
}


users.find(function(user) {
  return users.name === "次郎";
});






posts = [
  {id: 1, title: "古い"},
  {id: 2, title: "新しい"}
];

let comments = {postId: 2, content: "イイネ"};

function postForComment(post, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  })
}