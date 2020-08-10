import React from 'react';

import Signal from '../Signal';
import Plus from '../Plus';
import Exclamation from '../Exclamation';
import Worker from '../Worker';
import workers2 from '../../../services/Workers';
import './style.css';


function Condition(props) {
  const { exp: { exclamation, signal, workers }, indExp } = props;
  return (
    <div className="condition">
      <Exclamation exclamation={exclamation} indExp={indExp} />
      <Signal signal={signal} indExp={indExp} /> 
      {workers.map((workerId, indWor) => {
      const { abbreviation, img } = workers2[workerId];
      return  (
        <Worker
          key={`cond_worker-${workerId}-${indWor}`}
          name={abbreviation} 
          img={img}
          indExp={indExp}
          indWor={indWor}
        />
      )})}
      {/* <Plus /> */}
    </div>
  );
}

export default Condition;
