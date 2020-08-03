import React from 'react';
import Worker from '../../../Components/Worker';
import Signal from '../Signal';
import './style.css';

const worker1 = {
  id: 'yy63e3ghg5hfr44',
  name: 'Roz',
  img: 'https://media-exp1.licdn.com/dms/image/C4D03AQGw7igMzXLISA/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=ZNurdKTPI3xrsRvyFiXdtk5q3GwcQ71Lh6LsEJAd2hg',
};
const worker2 ={
  id: 'yyede3ghg54thf4',
  name: 'Folgado',
  img: 'https://media-exp1.licdn.com/dms/image/C4E03AQGwtKOnzfI3Ww/profile-displayphoto-shrink_100_100/0?e=1602115200&v=beta&t=Kte5mVl0AxNDGAc1hBe5AyrdoD4e7J5XA8Y6MZXZv2s',
};

function Condition() {
  return (
    <div className="condition">
      <Worker name={worker1.name} img={worker1.img} />
      <Signal signal="&&" />
      <Worker name={worker2.name} img={worker2.img} />
    </div>
  );
}

export default Condition;
