let numbers = [1, 2, 3];
let doubleNumbers = [];
for(i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}


// mapメソッド
let doubled = numbers.map(function(number) {
  return number * 2;
});



let cars = [
  {type: "軽自動車", price: "安い"},
  {type: "高急車", price: "高い"}
];
var prices = cars.map(function(car) {
  return car.price;
});



function pluck(array, property) {
  return array.map(function(element) {
    return element[property];
  });
}

var colorObjects = [{ color: '赤' }, { color: '青' }, { color: '黄色' }];
var colorNames = pluck(colorObjects, 'color');