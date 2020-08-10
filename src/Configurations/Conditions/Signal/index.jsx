import React, { useState, useContext } from 'react';
import { Context } from '../../../context';
import './style.css';

// expressions = [{ exclamation, propers: [{ id, workerId, signal }] }]

const handleClick = (arr, setArr, setSelected, expressions, setExpressions, indExp) => {
  const signal = arr.shift();
  setSelected(signal);
  setArr((curr) => {
    curr.push(signal);
    return curr;
  });
  // expressions[indExp].signal = signal;
  // setExpressions(expressions);
};

function Signal(props) {
  const { signal, indExp } = props;
  const [selected, setSelected] = useState(signal);
  const [arr, setArr] = useState(['AND', 'WITH']);
  const { expressions, setExpressions } = useContext(Context);

  return (
    <div className="signal" onClick={() => handleClick(arr, setArr, setSelected, expressions, setExpressions, indExp)}>
      <strong>{selected}</strong>
    </div>
  );
}

export default Signal;
