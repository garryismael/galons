import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';

export interface FuncProps {
  onSubmit(x: number, y: number, but: number): void;
  loading: boolean;
}

const Form: FC<FuncProps> = ({ onSubmit, loading }) => {
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
              Gallon 1
            </label>
            <input
              className='block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white'
              id='galonX'
              type='number'
              placeholder='Galon X'
              value={galonX}
              onChange={setGalonXEvent}
              min='1'
            />
          </div>
          <div className='w-full px-3 md:w-1/4'>
            <label
              className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
              htmlFor='galonY'
            >
              Gallon 2
            </label>
            <input
              className='block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500'
              id='galonY'
              type='number'
              placeholder='Galon Y'
              value={galonY}
              onChange={setGalonYEvent}
              min='1'
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
              min='1'
            />
          </div>
          <div className='w-full px-3 md:w-1/4'>
            <span className='w-full px-3 mb-6 md:w-1/4 md:mb-0'></span>
            <button
              type='submit'
              className='block w-full px-4 py-3 mb-3 text-sm not-italic font-bold leading-tight text-white button'
              disabled={loading}
            >
              <svg
                role='status'
                className={`inline mr-3 w-4 h-4 text-white font-bold text-sm ${
                  loading ? 'animate-spin' : 'hidden'
                }`}
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='#E5E7EB'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentColor'
                />
              </svg>
              Procéder
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
