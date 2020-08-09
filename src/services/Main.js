const primes = require('./primes');

const invalidMembersWithPop = (invalidMembersWith, membersToPrime) => {
  const invalidMembersWithKeys = {};
  for (let i = 0; i < invalidMembersWith.length; i++) {
    let mult = 1;
    for (let j = 0; j < invalidMembersWith[i].length; j++) {
      const member = invalidMembersWith[i][j];
      const primeKey = membersToPrime[member]
      mult = mult * primeKey;
    }
    invalidMembersWithKeys[mult] = mult;
  }
  return invalidMembersWithKeys;
};

const invalidGroupsPop = (invalidGroups, membersToPrime) => {
  const invalidGroupsKeys = {};
  for (let i = 0; i < invalidGroups.length; i++) {
    let mult = 1;
    for (let j = 0; j < invalidGroups[i].length; j++) {
      const member = invalidGroups[i][j];
      const primeKey = membersToPrime[member];
      mult = mult * primeKey;
    }
    invalidGroupsKeys[mult] = mult;
  }
  return invalidGroupsKeys;
};

const arrKeysPop = (arr, group_size, membersToPrime) => {
  const num_groups = arr.length / group_size;
  const arrKeys = [];
  for (let i = 0; i < num_groups; i++) {
    let mult = 1;
    for (let j = 0; j < group_size; j++) {
      const index = (i * group_size) + j;
      mult = mult * membersToPrime[arr[index]];
    }
    arrKeys.push(mult);
  }
  return arrKeys;
};

const arrayDivision = (arr, group_size) => {
  const array = [];
  for (let j = 0; j < arr.length / group_size; j++) {
    const index = j * group_size;
    array.push(arr.slice(index, index + group_size));
  }
  return array;
};

const main = (members, restrictions, group_size, n_results) => {
  const membersToPrime = {};
  const primeToMembers = {};

  for (let i = 0; i < members.length; i += 1) {
    membersToPrime[members[i]] = primes[i];
    primeToMembers[primes[i]] = members[i];
  }

  const { invalidMembersWith, invalidGroups } = restrictions;
  const invalidMembersWithKeys =
    invalidMembersWithPop(invalidMembersWith, membersToPrime);

  const invalidGroupsKeys =
    invalidGroupsPop(invalidGroups, membersToPrime);

  const switchPosition = (arr, p1, p2) => {
    let tmp;
    tmp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = tmp;
  };

  const out = [];
  let minTimes = 0;

  const verifications = (arr) => {
    const arrKeys = arrKeysPop(arr, group_size, membersToPrime);

    const validateGroupsKeys =
      arrKeys.some((key) => invalidGroupsKeys[key]);

    const validateMembersWithKeys =
      arrKeys.some((arrkey) => Object.keys(invalidMembersWithKeys).some((key) => arrkey % key === 0));

    if (minTimes < arr.length) {
      minTimes++;
      return false;
    }

    if (out.length === n_results) { return true; }

    if (validateGroupsKeys) { return true; }

    if (validateMembersWithKeys) { return true; }

    return false;
  };

  const permutation = (A) => {
    const recur = (arr, k) => {
      let len = arr.length;
      if (verifications(arr)) { return; }
      if (k === len) {
        out.push([...arrayDivision(arr, group_size)]);
      } else {
        for (let i = k; i < len; i++) {
          switchPosition(arr, i, k);
          recur(arr, k + 1);
          switchPosition(arr, k, i);
        }
      }
    };
    recur(A, 0);
  };
  
  permutation(members);
  return out;
};

module.exports = main;
