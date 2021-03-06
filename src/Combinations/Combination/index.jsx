import React, { useState } from 'react';
import Team from './Team';
import './style.css';

const handleClick = (setShow) => {
  setShow(curr => !curr);
};

function Combination(props) {
  const { teams, index } = props;
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <div className="combination">
        <span className="material-icons" onClick={() => handleClick(setShow)}>
          {show ? 'remove' : 'add'}
        </span>
        <div className="container">
          <p>Combination {index + 1}</p>
          <div className="teams">
            {show && teams.map((team, index) => (
              <Team key={`team${index}`} team={team} index={index} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Combination;
