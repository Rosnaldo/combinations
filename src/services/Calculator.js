const Amanda = require('./Amanda');
const Workers = require('./Workers');

const ids = Object.keys(Workers);

const calculator = (restrictions = [], k, N) => {
  return Amanda(ids, restrictions, k, N)
    // .map((comb) => comb
    // .map((team) => team
    // .map((id) => Workers[id].name)));
};

console.log(calculator([], 2, 2))

module.exports = calculator;
