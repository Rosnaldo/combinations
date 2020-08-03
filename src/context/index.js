import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createContext } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [teamSize, setTeamSize] = useState(2);
  const [combs, setCombs] = useState(3);
  const context = {
    teamSize,
    setTeamSize,
    combs,
    setCombs,
  };
  return (
    <Context.Provider value={context}>{children}</Context.Provider>
  );
};

export { Context, Provider };

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
