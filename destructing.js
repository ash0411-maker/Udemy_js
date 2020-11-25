let expense = {
  type: "交際費",
  amount: "4500円"
};

//-------    ES5  --------------
let type = expense.type;
let amount = expense.amount;


//-------    ES6（分割代入）  --------------

const { type, amount } = expense;