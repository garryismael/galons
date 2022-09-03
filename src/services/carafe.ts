import axios from 'axios';

export interface Carafe {
  x: number;
  y: number;
}

const URL = 'https://carafe.deta.dev';

async function service(x: number, y: number, but: number): Promise<Array<Carafe>> {
  const resp = await axios.get(`${URL}/${x}/${y}/${but}`);
  return resp.data;
}
export default service;
