import React, { useState } from 'react';
import './style.css';

const handleClick = (setShow) => {
  setShow(curr => !curr);
};

function Exclamation() {
  const [show, setShow] = useState(true);
  return (
    <div className="exclamation" onClick={() => handleClick(setShow)}>
      <strong>{show ? '' : '!'}</strong>
    </div>
  );
}

export default Exclamation;
