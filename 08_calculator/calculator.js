const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((product, current) => product * current, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let res = 1;
  for (let index = 1; index < a + 1; index++) {
    res *= index;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
