import React from 'react';

import Workers from './Workers';
import Condition from './Conditions';
import Config from './Config';
import './style.css';

function Configuration() {
  return (
    <div className="configuration">
      <Workers />
      <Condition />
      <Config />
    </div>
  );
}

export default Configuration;
