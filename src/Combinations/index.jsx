import React, { useState } from 'react';
import Combination from './Combination';
import calculator from '../services/Calculator';
import './style.css';

const handleClick = (setCombs) => {
  setCombs(calculator([], 2, 2));
};

function Combinations() {
  const [combs, setCombs] = useState([]);

  return (
    <div className="combinations">
      <div className="field">
        <span class="material-icons" onClick={() => handleClick(setCombs)}>
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
