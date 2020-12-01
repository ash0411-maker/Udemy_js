// ES５でのクラス継承

function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return "ウィーン";
}

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return "ぶぶー！！！";
}

const toyota = new Toyota({color: "red", title: "アクア"})
toyota.drive();
toyota.honk();



// ===========================================================-
// ===========================================================-
// ===========================================================-
// ===========================================================-
// ===========================================================-

// ES6でのクラス継承

class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return "ウィーン"
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  honk() {
    return "ぶぶー！";
  }
}

const toyota = new Toyota({ color:  "red", title: "アクア"});
