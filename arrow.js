// ES5
const add = function(a, b) {
  return a + b;
}

// ES6
const add = (a, b) => {
  return a + b;
}

// ES6
const add = (a, b) => return a + b;



// -------------------------------------
// ES5
const numbers =[1,2,3];
numbers.map(function(number) {
  return number * 2;
});

// ES6
const numbers =[1,2,3];
numbers.map(number => number * 2);
// -------------------------------------


const teams = {
  members: ["太郎", "花子"],
  teamName: "スーパーチーム",
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member}は${this.teamName}所属です。`
    });
  }
};



// ES５の解決方法
const teams = {
  members: ["太郎", "花子"],
  teamName: "スーパーチーム",
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member}は${this.teamName}所属です。`
    }.bind(this);
  }
};

// thisのエラー解決方法２つ
// ①.bind(this)を記述する
// ②var selt = this;を使って、thisの代わりにselfを使用する