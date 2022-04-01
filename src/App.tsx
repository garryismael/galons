import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/form';
import service, { Carafe } from './services/carafe';
import { VIDE_0 } from './constants/animation';
import { cssStyle } from './utils/utils';

const App = () => {
  const [galonX, setGalonX] = useState<number>(0);
  const [galonY, setGalonY] = useState<number>(0);
  const [cssX, setCssX] = useState<string>(VIDE_0);
  const [cssY, setCssY] = useState<string>(VIDE_0);
  const [onLoad, setOnLoad] = useState<boolean>(false);
  const [haveSolution, setHaveSolution] = useState<boolean>(true);

  useEffect(() => {}, [galonX, galonY]);
  const initialize = () => {
    setGalonX(0);
    setGalonY(0);
    setCssX(VIDE_0);
    setCssY(VIDE_0);
  };

  const changeEvent = (x: number, y: number, but: number) => {
    initialize();
    service(x, y, but).then(noeuds => {
      setOnLoad(true);
      if (noeuds.length === 0) {
        setHaveSolution(false);
        setTimeout(() => {
          setHaveSolution(true);
        }, 5000);
        setOnLoad(false);
      } else {
        for (let i = 0; i < noeuds.length; i++) {
          setTimeout(() => {
            setGalons(x, y, noeuds, i);
            if (i < noeuds.length) {
              setGalonX(noeuds[i + 1].x);
              setGalonY(noeuds[i + 1].y);
            }
          }, 10000 * i);
        }
      }
    });
  };

  const setGalons = (x: number, y: number, noeuds: Array<Carafe>, i: number) => {
    const noeud_x: number = noeuds[i].x;
    const noeud_y: number = noeuds[i].y;
    if (i + 1 < noeuds.length) {
      const styleX = cssStyle(noeud_x, noeuds[i + 1].x, x);
      const styleY = cssStyle(noeud_y, noeuds[i + 1].y, y);
      setCssX(styleX);
      setCssY(styleY);
    } else {
      setOnLoad(false);
      setTimeout(() => {
        setCssX(cssStyle(noeud_x, noeud_x, x));
        setCssY(cssStyle(noeud_y, noeud_y, y));
      }, 5000);
    }
  };
  return (
    <div className='items-center max-w-2xl p-6 mx-auto mt-48 bg-white shadow-lg rounded-xl'>
      <div
        className={`flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 mb-5 mt-5 ${
          haveSolution ? 'invisible' : 'visible'
        }
        `}
        role='alert'
      >
        <svg className='fill-current w-4 h-4 mr-2' viewBox='0 0 20 20'>
          <path d='M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z' />
        </svg>
        <p>Aucune solution.</p>
      </div>
      <Form onSubmit={changeEvent} loading={onLoad} />
      <div className='flex items-center gap-56 mx-auto'>
        <div>
          <div className='shape'>
            <div className={`wave ${cssX}`}></div>
          </div>
          <div className='mt-7 text-center text-2xl bg-blue-500 rounded-full text-white py-4 w-16 h-16 mx-auto font-bold'>
            {galonX}
          </div>
        </div>
        <div>
          <div className='shape'>
            <div className={`wave ${cssY}`}></div>
          </div>
          <div className='mt-7 text-center text-2xl bg-blue-500 text-dark rounded-full text-white py-4 w-16 h-16 mx-auto font-bold'>
            {galonY}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
