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




//-------    ES6（分割代入　配列）  --------------
const companies = [
  "google",
  "facebook",
  "uber"
];

const [ name ] = companies;



const companies = [
  "google",
  "facebook",
  "uber"
];

const [ name, ...rest ] = companies;
name; => google
rest; => [ "facebook", "uber"]






//-------    ES6（配列とオブジェクトを同時に代入）  --------------
const companies = [
  { name: "Google", location: "マウンテンビュー" },
  { name: "facebook", location: "メンロパーク" },
  { name: "uber", location: "サンフランシスコ" },
];


//-------    ES5  --------------
const location = companies[0].location;
location => マウンテンビュー

//-------    ES6  --------------
const [{location}] = companies





// ユースケース
function signup(username, password, email, birthday, city) {
  //  ここでユーザ０を作成してDBに保存される
}
//  こんなけ多いと別のファイルで使おうと思った時に、引数が何番目か確認しないといけなくて、メンテナンスがし辛い。
signup("myusername", "mypassword", "myemail@sss.com", "1999/11/11", "tokyo");




// ①引数名を、プロパティを持ったオブジェクトにして分割代入を使う
// 引数の順番を気にしなくていい
function signup({username, email, password, city, birthday}) {
  //  ここでユーザ０を作成してDBに保存される
}

const user = {
  username: "myusername",
  password: "mypassword",
  email: "myemail",
  birthday: "11",
  city: "tokyo"
}
signup(user);




// -------------------------------------
// --------　ユースケース -------------------　　　
// -------------------------------------


// APIから情報を取得してデータを整形する。
[
  { x:4 ,y: 5 },
  { x: 10 ,y: 1},
  { x: 0, y: 40},
];



// APIを使用するためには配列ではなくて、ハッシュに整形する必要がある場合。
const = points = [
  [4, 5],
  [10,1],
  [0, 40]
];


