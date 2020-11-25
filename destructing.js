let expense = {
  type: "交際費",
  amount: "4500円"
};

//-------    ES5  --------------
let type = expense.type;
let amount = expense.amount;


//-------    ES6（分割代入）  --------------

const { type, amount } = expense;







//-------    ES5  --------------
let savedFile = {
  extension: "jpeg",
  name: "profile",
  size: 14040
}

function fileSummary(file) {
  return `${file.name}.${file.extension}の容量は${file.size}です。`
}


//-------    ES6（分割代入）  --------------
let savedFile = {
  extension: "jpeg",
  name: "profile",
  size: 14040
}

function fileSummary({name, extension, size}) {
  return `${name}.${extension}の容量は${size}です。`
}
