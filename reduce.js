let numbers = [10, 20, 30];
let sum = 0;

for(i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}


numbers.reduce(function(sum, number){
  return sum + number
}, 0);