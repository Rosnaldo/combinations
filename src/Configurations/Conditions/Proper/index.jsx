import React from 'react';
import Worker from '../../../Components/Worker';
import Signal from '../Signal';
import workers from '../../../services/Workers';
import './style.css';

function Proper(props) {
  const { proper: { workerId, signal } } = props;
  const { name, img } = workers[workerId]
  return (
    <div className="proper">
      <Worker name={name} img={img} />
      <Signal signal={signal} />
    </div>
  );
}

export default Proper;