import * as mathjs from 'mathjs';

const math = mathjs.create(mathjs.all);

math.config({
  number: 'BigNumber',
  precision: 14,
});

const evaluate = ({ expression }) => {
  const result = math.evaluate(expression);

  if (!result.entries) {
    return result.toString();
  }

  if (result.entries) {
    return result.entries[result.entries.length - 1].toString();
  }

  return '';
};

// const evaluate = ({ expression, variables = {}, toFixed, toDp }) => {
//   const bigNumberVariables = {};
//   const varKeys = Object.keys(variables);

//   varKeys.forEach((key) => {
//     bigNumberVariables[key] = math.bignumber(variables[key]);
//   });

//   const result = math.evaluate(expression, bigNumberVariables);

//   if (toFixed) {
//     return result.toFixed(toFixed);
//   }

//   if (toDp) {
//     return result.toDecimalPlaces(toDp).toString();
//   }

//   return result.toString();
// };

const add = (num1, num2) => {
  return math.add(math.bignumber(num1), math.bignumber(num2)).toString();
};

const multiply = (num1, num2) => {
  return math.multiply(math.bignumber(num1), math.bignumber(num2)).toString();
};

const subtract = (num1, num2) => {
  return math.subtract(math.bignumber(num1), math.bignumber(num2)).toString();
};

const divide = (num1, num2) => {
  return math.divide(math.bignumber(num1), math.bignumber(num2)).toString();
};

const mod = (num1, num2) => {
  return math.mod(math.bignumber(num1), math.bignumber(num2)).toString();
};

const equal = (num1, num2) => {
  return math.equal(math.bignumber(num1), math.bignumber(num2));
};

const unequal = (num1, num2) => {
  return math.unequal(math.bignumber(num1), math.bignumber(num2));
};

const larger = (num1, num2) => {
  return math.larger(math.bignumber(num1), math.bignumber(num2));
};

const smaller = (num1, num2) => {
  return math.smaller(math.bignumber(num1), math.bignumber(num2));
};

const largerEq = (num1, num2) => {
  return math.largerEq(math.bignumber(num1), math.bignumber(num2));
};

const smallerEq = (num1, num2) => {
  return math.smallerEq(math.bignumber(num1), math.bignumber(num2));
};

const abs = (num) => {
  return math.abs(math.bignumber(num));
};

const calculator = {
  ...math,
  evaluate,
  add,
  multiply,
  subtract,
  divide,
  mod,
  equal,
  unequal,
  larger,
  smaller,
  largerEq,
  smallerEq,
  abs,
};

export default calculator;
