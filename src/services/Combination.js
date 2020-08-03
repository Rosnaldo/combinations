const combination = (A, k) => {
  const B = [];
  const out = [];
  const recur = (i) => {
    if (B.length === k) {
      // console.log(B);
      out.push([...B]);
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

module.exports = combination;
