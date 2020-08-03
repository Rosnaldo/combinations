import React from 'react';
import './style.css';

function Signal(props) {
  const { signal } = props;
  return (
    <div className="signal">
      <strong>{signal}</strong>
    </div>
  );
}

export default Signal;
