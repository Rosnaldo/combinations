import React, { useState } from 'react';
import './style.css';

const handleClick = (setEE) => {
  setEE(curr => !curr);
};

function Signal(props) {
  const { signal } = props;
  const [ee, setEE] = useState(signal);
  return (
    <div className="signal" onClick={() => handleClick(setEE)}>
      <strong>{ee ? '&&' : ''}</strong>
    </div>
  );
}

export default Signal;
