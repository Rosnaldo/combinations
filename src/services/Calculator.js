const main = require('./Main');
const Workers = require('./Workers');

const ids = Object.keys(Workers);


const restrictions = {
  invalidMembersWith: [
    ['qi12ef8', 'qudyq7'],
  ],
  invalidGroups: [
    ['qidq8778', 'yy63e3ghrfefr44', 'yyede3ghg54thf4', 'yyede3ghg54thf4def4'],
  ]
};

const calculator = (group_size, n_results) => {
  return main(ids, restrictions, group_size, n_results)
};

module.exports = calculator;
