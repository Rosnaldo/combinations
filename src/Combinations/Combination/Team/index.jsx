import React, { useState } from 'react';
import Worker from '../../../Components/Worker';
import Workers from '../../../services/Workers';
import './style.css';

const handleClick = (setShow) => {
  setShow(curr => !curr);
};

function Team(props) {
  const { team, index } = props;
  const [show, setShow] = useState(false);
  return (
    <div className="team">
      <span className="material-icons" onClick={() => handleClick(setShow)}>
        {show ? 'remove' : 'add'}
      </span>
      <div className="container">
        <p>Team {index + 1}:</p>
        {show && team.map((id, index) => {
          const { abbreviation, img } = Workers[id];
          return (
          <Worker key={`worker${index}`} img={img} name={abbreviation} />
        )})}
      </div>
    </div>
  );
}

export default Team;
