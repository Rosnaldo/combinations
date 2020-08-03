import React from 'react';
import Condition from './Condition';
import './style.css';

const expressions = [
  {
    exclamation: true,
    propers: [
      {
        workerId: 'qidq8778',
        signal: true,
      },
      {
        workerId: 'qidq8778',
        signal: true,
      },
    ],
  }
]

function Conditions() {
  return (
    <div className="conditions">
      <strong>Conditions</strong>
      <div className="container">
        {expressions.map((exp, index) => (
          <Condition key={`exp${index}`} exp={exp} />
        ))}
      </div>
    </div>
  );
}

export default Conditions;
