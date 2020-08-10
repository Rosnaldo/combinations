const main = require('./Main');
const Workers = require('./Workers');

const ids = Object.keys(Workers);

const calculator = (restrictions, group_size, n_results) => {
  return main(ids, restrictions, group_size, n_results)
};

module.exports = calculator;
