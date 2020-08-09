import React, { useState } from 'react';
import './style.css';

const handleClick = (arr, setArr, setSelected) => {
  const exclamation = arr.shift();
  setSelected(exclamation);
  setArr((curr) => {
    curr.push(exclamation);
    return curr;
  });
};

function Exclamation(props) {
  const { exclamation } = props;
  const [selected, setSelected] = useState(exclamation);
  const [arr, setArr] = useState(['NOT', '']);
  return (
    <div className="exclamation" onClick={() => handleClick(arr, setArr, setSelected)}>
      <strong>{selected}</strong>
    </div>
  );
}

export default Exclamation;
