import React, { useContext } from 'react';
import { Context } from '../../context';
import './style.css';

function Config() {
  const {
    teamSize,
    setTeamSize,
    n_combs,
    setN_combs,
  } = useContext(Context);

  return (
    <div className="config">
      <strong>Config</strong>
      <div className="field">
        <p>Team size:</p>
        <input type="number" value={teamSize} onChange={(e) => setTeamSize(e.target.value)} />
      </div>
      <div className="field">
        <p>Combs:</p>
        <input type="number" value={n_combs} onChange={(e) => setN_combs(e.target.value)} />
      </div>
    </div>
  );
}

export default Config;
