import React, { useContext } from 'react';

import { Context } from '../../../context';
import './style.css';

const handleClick = () => {

}

function Plus() {
  const { expressions, setExpressions } = useContext(Context);
  return (
    <div className="plus" onClick={() => handleClick()}>
      <span className="material-icons">
        add
      </span>
    </div>
  );
}

export default Plus;
