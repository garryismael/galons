import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';

export interface FuncProps {
  onSubmit(x: number, y: number, but: number): void;
}

const Form: FC<FuncProps> = ({ onSubmit }) => {
  const [galonX, setGalonX] = useState<number>(0);
  const [galonY, setGalonY] = useState<number>(0);
  const [but, setBut] = useState<number>(0);
  const clickSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onSubmit(galonX, galonY, but);
  };

  const setGalonXEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setGalonX(parseInt(event.target.value));
  };

  const setGalonYEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setGalonY(parseInt(event.target.value));
  };

  const setButEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setBut(parseInt(event.target.value));
  };

  return (
    <div>
      <form className='w-full max-w-2xl' onSubmit={clickSubmit}>
        <div className='flex flex-wrap mb-6 -mx-3'>
          <div className='w-full px-3 mb-6 md:w-1/4 md:mb-0'>
            <label
              className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
              htmlFor='galonX'
            >
              Galon 1
            </label>
            <input
              className='block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none focus:outline-none focus:bg-white'
              id='galonX'
              type='number'
              placeholder='Galon X'
              value={galonX}
              onChange={setGalonXEvent}
            />
            <p className='text-xs italic text-red-500'>Please fill out this field.</p>
          </div>
          <div className='w-full px-3 md:w-1/4'>
            <label
              className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
              htmlFor='galonY'
            >
              Galon 2
            </label>
            <input
              className='block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500'
              id='galonY'
              type='number'
              placeholder='Galon Y'
              value={galonY}
              onChange={setGalonYEvent}
            />
          </div>
          <div className='w-full px-3 md:w-1/4'>
            <label
              className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
              htmlFor='but'
            >
              But
            </label>
            <input
              className='block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500'
              id='but'
              type='number'
              placeholder='But'
              value={but}
              onChange={setButEvent}
            />
          </div>
          <div className='w-full px-3 md:w-1/4'>
            <span className='w-full px-3 mb-6 md:w-1/4 md:mb-0'></span>
            <button
              type='submit'
              className='block w-full px-4 py-3 mb-3 leading-tight text-white button'
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
