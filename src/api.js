import axios from 'axios';
import { BACKEND_URL, REQUEST_TIMEOUT } from 'const';

const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};

export {createAPI};
