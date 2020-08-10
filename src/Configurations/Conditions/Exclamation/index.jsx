import React, { useState, useContext } from 'react';
import { Context } from '../../../context';
import './style.css';

// expressions = [{ exclamation, propers: [{ id, workerId, signal }] }]

const handleClick = (arr, setArr, setSelected, expressions, setExpressions, indExp) => {
  const exclamation = arr.shift();
  setSelected(exclamation);
  setArr((curr) => {
    curr.push(exclamation);
    return curr;
  });
  expressions[indExp].exclamation = exclamation;
  setExpressions(expressions);
};

function Exclamation(props) {
  const { exclamation, indExp } = props;
  const [selected, setSelected] = useState(exclamation);
  const [arr, setArr] = useState(['!', '']);
  const { expressions, setExpressions } = useContext(Context);
  return (
    <div className="exclamation" onClick={() => handleClick(arr, setArr, setSelected, expressions, setExpressions, indExp)}>
      <strong>{selected}</strong>
    </div>
  );
}

export default Exclamation;
