import React, { useState } from 'react';
import './style.css';

const handleClick = (setShow) => {
  setShow(curr => !curr);
};

function Exclamation(props) {
  const { exclamation } = props;
  const [show, setShow] = useState(exclamation);
  return (
    <div className="exclamation" onClick={() => handleClick(setShow)}>
      <strong>{show ? '!' : ''}</strong>
    </div>
  );
}

export default Exclamation;
