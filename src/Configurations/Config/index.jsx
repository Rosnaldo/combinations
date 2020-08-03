import React from 'react';
import './style.css';

function Config() {
  return (
    <div className="config">
      <strong>Config</strong>
      <div className="field">
        <p>Team size:</p>
        <input type="number" />
      </div>
    </div>
  );
}

export default Config;
