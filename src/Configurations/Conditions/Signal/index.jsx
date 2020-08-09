import React, { useState } from 'react';
import './style.css';

const handleClick = (arr, setArr, setSelected) => {
  const signal = arr.shift();
  setSelected(signal);
  setArr((curr) => {
    curr.push(signal);
    return curr;
  });
};

function Signal(props) {
  const { signal } = props;
  const [selected, setSelected] = useState(signal);
  const [arr, setArr] = useState(['AND', 'WITH', '']);
  return (
    <div className="signal" onClick={() => handleClick(arr, setArr, setSelected)}>
      <strong>{selected}</strong>
    </div>
  );
}

export default Signal;
