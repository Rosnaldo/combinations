import React from 'react';
import './style.css';

function Worker(props) {
  const { img, name } = props;
  return (
    <div className="worker">
      <img src={img} />
      <p>{name}</p>
    </div>
  );
}

export default Worker;
