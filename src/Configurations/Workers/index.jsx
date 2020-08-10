import React from 'react';
import Worker from '../Worker';
import workers from '../../services/Workers';
import './style.css';

function Workers() {
  return (
    <div className="workers">
      <strong>Workers: {Object.values(workers).length}</strong>
      <div className="container">
        {Object.keys(workers).map((id, index) => (
          <Worker key={id} name={workers[id].name} img={workers[id].img} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Workers;
