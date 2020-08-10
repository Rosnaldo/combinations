import React, { useContext } from 'react';
import Condition from './Condition';
import { Context } from '../../context';
import './style.css';

function Conditions() {
  const { expressions } = useContext(Context);

  return (
    <div className="conditions">
      <strong>Conditions</strong>
      <div className="container">
        {expressions.map((exp, indExp) => (
          <Condition key={`exp${indExp}`} exp={exp} indExp={indExp} />
        ))}
      </div>
    </div>
  );
}

export default Conditions;
