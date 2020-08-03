import React from 'react';
import Worker from '../Worker';
import './style.css';

const workers = [
  {
    id: 'qidq8778',
    name: 'Cairo Noleto',
    img: 'https://media-exp1.licdn.com/dms/image/C4D03AQECAYkhUs6x0Q/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=RNsN_BF5Bkq9gYfT5xdOfm94TkZqgWVCMHg7BfJoRrg',
  },
  {
    id: 'qidfef8',
    name: 'Guilherme Crespo',
    img: 'https://media-exp1.licdn.com/dms/image/C4D03AQHkg5ce5H4gdA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=Tuj80Cxb6AAtlQV6kE0SWrBSMDCLBeCpFnbFY2Uub-Q',
  },
  {
    id: 'qi12ef8',
    name: 'Pedro Henrique',
    img: 'https://media-exp1.licdn.com/dms/image/C5603AQFg4MNW6WWYVA/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=PDSIcjMp_QkCKDrRGkfBx7r4m0KcQ0EnoVzww0TctTw',
  },
  {
    id: 'qudyq7',
    name: 'Giorgia Leonia',
    img: 'https://media-exp1.licdn.com/dms/image/C4D03AQEaeZXDL-DXRg/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=zEgaOS798j0muoD5AbR0ymZieVX1ZU1sEeO0qD-kwJw',
  },
  {
    id: 'qud45y',
    name: 'Anderson Bolivar',
    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQH6r6tXPTGR_Q/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=K-dVFU4bVYZBgkPcGJddK0uohUE2iVufVSyhWN9S6lI',
  },
  {
    id: '4t5tggeff',
    name: 'Douglas Henrique',
    img: 'https://media-exp1.licdn.com/dms/image/C4D03AQFzS1bN6D-_RQ/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=xlP3ghAGaVle-_IBGwvoHkecSE8-M7e-dMZW019WkRw',
  },
  {
    id: '4t5tdwqdeff',
    name: 'Felipe Andrade',
    img: 'https://media-exp1.licdn.com/dms/image/C4D03AQHa_aOgh_BaIA/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=QbF1TdXKdSnZ9YEmW7Ps68sU-jWFXyrEaTdlvUrIboc',
  },
  {
    id: '4t535gh',
    name: 'Julio Cesar',
    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQEbpGxJ-AmzAg/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=iChVRcoe1fyjdzhW0VZG8p9qIKBLlSavD8JUlClYck0',
  },
  {
    id: 'yy63de',
    name: 'Lauro Lyra',
    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQEv3kNvRTJgig/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=KSwGgy2OBD8fMtRljOHCox6o5nvYnOSqvRsFrinNxBM',
  },
  {
    id: 'yy63ewfgr',
    name: 'Kevin Mendes',
    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQHeQ4crSQxvqA/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=WjggVnbhh-egCJeJID6mxuXLzelwWMcTIYj_YFTKArU',
  },
  {
    id: 'yy63ewfgrf44',
    name: 'Miguel Miranda',
    img: 'https://media-exp1.licdn.com/dms/image/C4D03AQGOdYb6NPnk_A/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=YNGz_op8ss89Lg95MUkT8Mpm__ZJCwS3jV_-miFsOU4',
  },
  {
    id: 'yy63e3ghrf44',
    name: 'Johnathas Henrique',
    img: 'https://media-exp1.licdn.com/dms/image/C4D03AQE0HI6wfxIJyg/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=Wmr5wGlqYQQYGP4-jO_tTmauVlzfwO_Hh9SNdnd8ksk',
  },
  {
    id: 'yy63e3ghrfefr44',
    name: 'Amanda Caldeira',
    img: 'https://media-exp1.licdn.com/dms/image/C4D03AQGr48zcM2oeGA/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=6V980YReqpWrko7kT4ANAFJ9t0V_TIBxJLx9aCM8He8',
  },
  {
    id: 'yy63e3ghg5hfr44',
    name: 'Roz',
    img: 'https://media-exp1.licdn.com/dms/image/C4D03AQGw7igMzXLISA/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=ZNurdKTPI3xrsRvyFiXdtk5q3GwcQ71Lh6LsEJAd2hg',
  },
  {
    id: 'yyede3ghg54thf4',
    name: 'Folgado',
    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQGwtKOnzfI3Ww/profile-displayphoto-shrink_100_100/0?e=1602115200&v=beta&t=Kte5mVl0AxNDGAc1hBe5AyrdoD4e7J5XA8Y6MZXZv2s',
  },
  {
    id: 'yyede3ghg54thf4def4',
    name: 'Andrey Tsuzuki',
    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQG2n22ja4PAiA/profile-displayphoto-shrink_100_100/0?e=1602115200&v=beta&t=HSWQHwQzBe8Xb3xZSYgyo-AU_fEncO-Et0dJpnrGL60',
  },
];

function Workers() {
  return (
    <div className="workers">
      <strong>Workers: {workers.length}</strong>
      <div className="container">
        {workers.map(({ id, name, img }) => (
          <Worker key={id} name={name} img={img} />
        ))}
      </div>
    </div>
  );
}

export default Workers;
