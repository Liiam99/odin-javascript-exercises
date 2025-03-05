const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((totalSum, value) => add(totalSum, value), 0);
};

const multiply = function(arr) {
  return arr.reduce((totalValue, value) => totalValue*value);
};

const power = function(base, exponent) {
  return base**exponent;
};

const factorial = function(n) {
  let nFact = 1;

  for (let i = n; i > 1; i--) {
    nFact *= i;
  }

  return nFact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
