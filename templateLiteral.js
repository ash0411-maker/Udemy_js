function getMessage() {
  const year = new Date().getFullYear();

  // ES5
  return "今年は" + year + "です"

  // ES6
  return `今年は${year}年です。`
}