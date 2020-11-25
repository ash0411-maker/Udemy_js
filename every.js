
computers =[
  {name: "apple", ram: 24},
  {name: "cmopq", ram: 4},
  {name: "acer", ram: 32},
];


let allComputersCanRun = true;
let someComputersCanRun = false;d
for(let i = 0; i < computers.length; i++) {
  let computer = computers[i];

  if(computer.ram < 16) {
    allComputersCanRun = false;
  } else {
    someComputersCanRun = true;
  }
};


computers.every(function(computer) {
  return computer.ram >= 16;
})
