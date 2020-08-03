import React, { useState } from 'react';
import './style.css';

const handleClick = (setEE) => {
  setEE(curr => !curr);
};

function Signal() {
  const [ee, setEE] = useState(false);
  return (
    <div className="signal" onClick={() => handleClick(setEE)}>
      <strong>{ee ? '&&' : ''}</strong>
    </div>
  );
}

export default Signal;
