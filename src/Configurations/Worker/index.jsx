import React from 'react';
import './style.css';

function Worker(props) {
  const { img, name, index } = props;
  return (
    <div className="worker-cdjbh">
      <p>{index}</p>
      <img src={img} alt=""/>
      <p>{name}</p>
    </div>
  );
}

export default Worker;
