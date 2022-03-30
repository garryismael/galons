import axios from 'axios';

export interface Carafe {
  x: number;
  y: number;
}

const URL = 'http://127.0.0.1:8000';

async function service(x: number, y: number, but: number): Promise<Array<Carafe>> {
  const resp = await axios.get(`${URL}/${x}/${y}/${but}`);
  return resp.data;
}
export default service;
