let numbers = [10, 20, 30];
let sum = 0;

for(i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}


numbers.reduce(function(sum, number){
  return sum + number
}, 0);





let primaryColors = [
  { color: "red" },
  { color: "yellow" },
  { color: "blue" }
];

primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color)
  return previous;
}, []);






function balancedParend(string) {
  return !string.split('').reduce(function(previous, char){
    if(previous < 0) { return previous; }
    if(char === "(") { return previous + 1; }
    if(char === ")") { return previous - 1; }
  }, 0)
}

balancedParens("()");