import React, { useState } from 'react';
import Worker from '../../../Components/Worker';
import './style.css';

const handleClick = (setShow) => {
  setShow(curr => !curr);
};

function Team(props) {
  const { team, index } = props;
  const [show, setShow] = useState(true);
  return (
    <div className="team">
      <span className="material-icons" onClick={() => handleClick(setShow)}>
        {show ? 'remove' : 'add'}
      </span>
      <div className="container">
        <p>Team {index + 1}:</p>
        {show && team.map(({ id, img, name }) => (
          <Worker key={id} img={img} name={name} />
        ))}
      </div>
    </div>
  );
}

export default Team;
