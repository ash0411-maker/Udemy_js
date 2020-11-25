let products = [
  {name: "きゅうり", type: "野菜", quantity: 0, price: 1},
  {name: "バナナ", type: "フルーツ", quantity: 10, price: 15},
  {name: "セロリ", type: "野菜", quantity: 30, price: 9},
  {name: "オレンジ", type: "フルーツ", quantity: 3, price: 5}
];

let filteredProducts = [];

for(let i = 0; i <= products.length; i++) {
  if(products[i].type === "フルーツ") {
    filteredProducts.push(products[i])
  }
}


products.filter(function(product) {
  return product.type === "フルーツ"；
});



// 種類が野菜で、量が０個より多くて、値段が１０より小さい
products.filter(function(product) {
  return product.type === "野菜"
    && product.quantity > 0
    && product.price < 10
});


let post = {id: 4, title: "aaaaaaaE"};
let comments = [
  {postId: 4, content: "nice"},
  {postId: 3, content: "gooooooood"},
  {postId: 4, content: "nice"}
];


function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id
  })
}