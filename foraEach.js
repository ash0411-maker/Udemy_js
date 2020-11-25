// forループ
let colors = ["red", "blue", "green"];x
for(let i = 0; i < colors.length; i++ ) {
  console.log(color[i]);
}


// forEach
colors.forEach(function(color) {
  console.log(color)
})


let numbers = [1, 2, 3, 4, 5];
let sum = 0;

function adder(num) {
  sum += nun;
};

numbers.forEach(adder);


var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image) {
    areas.push(image.height * image.width);
});