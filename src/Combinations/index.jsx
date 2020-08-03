import React from 'react';
import Combination from './Combination';
import './style.css';

const combs = [
  {
    id: 'comb1',
    teams: [
      {
        id: 'team1',
        team: [
          {
            id: 'worker1',
            img: "https://media-exp1.licdn.com/dms/image/C4D03AQECAYkhUs6x0Q/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=RNsN_BF5Bkq9gYfT5xdOfm94TkZqgWVCMHg7BfJoRrg",
            name: "Cai",
          },
          {
            id: 'worker2',
            img: "https://media-exp1.licdn.com/dms/image/C4D03AQECAYkhUs6x0Q/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=RNsN_BF5Bkq9gYfT5xdOfm94TkZqgWVCMHg7BfJoRrg",
            name: "Cai",
          },
        ],
      } 
    ],
  },
];

function Combinations() {
  return (
    <div className="combinations">
      <strong>Combinations:</strong>
      {combs.map(({ id, teams }, index) => (
        <Combination key={id} teams={teams} index={index} />
      ))}
    </div>
  );
}

export default Combinations;
