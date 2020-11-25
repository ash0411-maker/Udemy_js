
// Rest演算子
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}
addNumbers(1, 2, 3, 4, 5)



// spread演算子
const defaultColors = ["赤", "黄"];
const userFavoriteColors = ["オレンジ", "黄"];

[...defaultColors, ...userFavoriteColors]


// 指定された値が最初に現れたインデックスを返します。値が見つからない場合は -1 を返します
function validateShoppingList(...items) {
  if(items.indexOf("牛乳") < 0) {
    return ["牛乳", ...items];
  }

  return items
}

validateShoppingList("オレンジ", "パン")