import React from 'react';
import Workers from './Workers';
import Condition from './Conditions';
import './style.css';

function Configuration() {
  return (
    <div className="configuration">
      <Workers />
      <Condition />
    </div>
  );
}

export default Configuration;
