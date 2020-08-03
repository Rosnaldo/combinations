import React from 'react';
import Condition from './Condition';
import './style.css';

const conditions = [
  'cond1', 'cond2'
];

function Conditions() {
  return (
    <div className="conditions">
      <strong>Conditions</strong>
      <div className="container">
        {conditions.map((cond) => (
          <Condition key={cond} />
        ))}
      </div>
    </div>
  );
}

export default Conditions;

  // Lip && Cai
