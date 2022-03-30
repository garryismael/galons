import { useState } from 'react';
import './App.css';
import Form from './components/form';
import service from './services/carafe';

const App = () => {
  const [galonX, setGalonX] = useState<number>(0);
  const [galonY, setGalonY] = useState<number>(0);
  const changeEvent = (x: number, y: number, but: number) => {
    service(x, y, but).then(noeuds => {
      setTimeout(() => {
        for (const noeud of noeuds) {
          setGalonX(noeud.x);
          setGalonY(noeud.y);
        }
      }, 10000);
    });
  };
  return (
    <div className='items-center max-w-2xl p-6 mx-auto mt-48 bg-white shadow-lg rounded-xl'>
      <Form onSubmit={changeEvent} />
      <div className='flex items-center gap-56 mx-auto'>
        <div>
          <div className='shape'>
            <div className='wave'></div>
          </div>
          <div className='mt-3 text-center'>{galonX}</div>
        </div>
        <div>
          <div className='shape'>
            <div className='wave'></div>
          </div>
          <div className='mt-2 text-center'>{galonY}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
