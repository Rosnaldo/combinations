const primes = require('./primes');
const combination = require('./Combination');

const Amanda = (alunos, grAt, k, N) => {
  const aluKeys = {};
  let total = 1;
  for (let i = 0; i < alunos.length; i += 1) {
    aluKeys[alunos[i]] = primes[i];
    total *= primes[i];
  }

  const map1 = new Map();
  const multp = (arr, map) => {
    let mult = 1;
    for (let j = 0; j < arr.length; j += 1) {
      mult *= aluKeys[arr[j]];
    }
    map.set(mult, arr);
  };
  for (let i = 0; i < grAt.length; i += 1) {
    combination(grAt[i], 2)
      .forEach(item => multp(item, map1));
  }

  const keyExist = (B) => {
    const arr = combination(B, 2);
    for (let i = 0; i < arr.length; i += 1) {
      if (map1.has(arr[i].reduce((acc, val) => acc * aluKeys[val], 1))) {
        return true;
      }
    }
    return false;
  };

  const arrayKey = (A) => {
    return A.reduce((acc, val) => acc * aluKeys[val], 1);
  };

  const combEqPoss = (A, k) => {
    const B = [];
    const out = {};
    const recur = (i) => {
      if (B.length === k) {
        if (!keyExist(B)) {
          out[arrayKey(B)] = [...B];
        }
        return;
      }
      for (let j = i; j < A.length; j++) {
        B.push(A[j]);
        recur(j + 1);
        B.pop();
      }
    };
    recur(0);
    return out;
  };

  const eqPoss = combEqPoss(alunos, k);

  const combRandom = (A, h) => {
    const B = [];
    const totalKey = (C) => C.reduce((acc, val) => acc * val, 1);
    let out = [];

    const recur = (i) => {
      if (out.length === N) {
        return;
      }
      if (B.length === h) {
        if (totalKey(B) === total) {
          out = [...out, [...B]];
        }
        return;
      }
      for (let j = i; j < A.length; j++) {
        B.push(A[j]);
        recur(j + 1);
        B.pop();
      }
    };
    recur(0);
    return out;
  };
  const final = combRandom(Object.keys(eqPoss), alunos.length / k);
  return final.map((arr) => arr.reduce((acc, val) => [...acc, [...eqPoss[val]]], []));
}

module.exports = Amanda;
