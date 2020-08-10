import React, { useState, useContext } from 'react';
import Combination from './Combination';
import calculator from '../services/Calculator';
import { Context } from '../context';
import './style.css';

// expressions = [{ exclamation, propers: [{ id, workerId, signal }] }]

const handleClick = (setCombs, expressions, teamSize, n_combs) => {
  const invalidMembersWith = [];
  const invalidGroups = [];

  expressions.map((exp) => {
    const { signal, workers } = exp;
    if (signal === 'AND') {
      invalidGroups.push(workers);
    }
    if (signal === 'WITH') {
      invalidMembersWith.push(workers);
    }
  });

  const restrictions = {
    invalidMembersWith,
    invalidGroups
  };

  setCombs(calculator(restrictions, teamSize, n_combs));
};


function Combinations() {
  const [combs, setCombs] = useState([]);
  const { expressions, teamSize, n_combs, } = useContext(Context);

  return (
    <div className="combinations">
      <div className="field">
        <span className="material-icons" onClick={() => handleClick(setCombs, expressions, teamSize, n_combs)}>
          play_circle_outline
        </span>
        <strong>Combinations:</strong>
      </div>
      <div className="board">
        {combs.map((teams, index) => (
          <Combination key={`comb${index}`} teams={teams} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Combinations;
