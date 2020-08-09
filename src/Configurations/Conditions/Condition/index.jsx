import React from 'react';
import Exclamation from '../Exclamation';
import Proper from '../Proper';
import './style.css';


function Condition(props) {
  const { exp: { exclamation, propers } } = props;
  return (
    <div className="condition">
      <Exclamation exclamation={exclamation} />
      {propers.map((proper) => (
        <Proper key={proper.id} proper={proper} />
      ))}
    </div>
  );
}

export default Condition;
