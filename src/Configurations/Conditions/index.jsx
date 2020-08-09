import React from 'react';
import Condition from './Condition';
import './style.css';

const expressions = [
  {
    exclamation: 'NOT',
    propers: [
      {
        id: 'afer24de',
        workerId: 'qidq8778',
        signal: 'AND',
      },
      {
        id: '2e32fg5g',
        workerId: 'yy63e3ghrfefr44',
        signal: 'AND',
      },
      {
        id: 'afer2e2de',
        workerId: 'yyede3ghg54thf4',
        signal: 'AND',
      },
      {
        id: '1egg553',
        workerId: 'yyede3ghg54thf4def4',
        signal: '',
      },
    ],
  },
  {
    exclamation: 'NOT',
    propers: [
      {
        id: 'afer242f4',
        workerId: 'qi12ef8',
        signal: 'WITH',
      },
      {
        id: '2e3234t5g',
        workerId: 'qudyq7',
        signal: 'WITH',
      },
    ]
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
