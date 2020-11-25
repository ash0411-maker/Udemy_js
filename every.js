
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


computers.some(function(computer) {
  return computer.ram >= 16;
})





function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
}

let username = new Field('my_username');
let password = new Field('my_password');
let birth = new Field('my_birth');

username.validate() && password.validate() && birth.validate()




var fields = [
	username,
	password,
	birth
];

let formIsValid = fields.every(function(field) {
 return field.validate();
}

if(formIsValid) {
	サーバーにリクエストを投げる
} else {
	エラーを表示させる
}