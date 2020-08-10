import React, { useState, useRef, createContext } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

const expressionsInit = [
  {
    exclamation: '!',
    signal: 'AND',
    workers: [
      'qidq8778', 'yy63e3ghrfefr44', 'yyede3ghg54thf4', 'yyede3ghg54thf4def4',
    ],
  },
  {
    exclamation: '!',
    signal: 'WITH',
    workers: ['qi12ef8', 'qudyq7'],
  },
];

const Provider = ({ children }) => {
  const [teamSize, setTeamSize] = useState(4);
  const [n_combs, setN_combs] = useState(2);
  const [expressions, setExpressions] = useState(expressionsInit);

  const context = {
    teamSize,
    setTeamSize,
    n_combs,
    setN_combs,
    expressions,
    setExpressions,
  };
  return (
    <Context.Provider value={context}>{children}</Context.Provider>
  );
};

export { Context, Provider };

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
