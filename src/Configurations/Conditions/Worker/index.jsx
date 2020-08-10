import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../../context';
import workers from '../../../services/Workers';
import './style.css';


const inputHandle = (e, setNumber, expressions, setExpressions, indExp, indWor) => {
  const { value } = e.target;
  setNumber(value);
  const id = Object.keys(workers)[value];
  expressions[indExp].workers[indWor] = id;
  setExpressions(expressions);
};

function Worker(props) {
  const { img, name, indExp, indWor } = props;
  const [image, setImage] = useState(img);
  const [worker, setWorker] = useState(name);
  const [number, setNumber] = useState(0);
  const { expressions, setExpressions } = useContext(Context);

  useEffect(() => {
    if (Object.keys(workers)[number]) {
      const { img, abbreviation } = workers[Object.keys(workers)[number]];
      setImage(img);
      setWorker(abbreviation);
    }
  }, [number]);

  return (
    <div className="worker-cef">
      <input type="text" value={number} onChange={(e) => inputHandle(e, setNumber, expressions, setExpressions, indExp, indWor)} />
      <img src={image} />
      <p>{worker}</p>
    </div>
  );
}

export default Worker;
