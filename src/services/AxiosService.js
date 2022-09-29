import Axios from 'axios';
import { baseURL } from '../env';
export const ServerApi = Axios.create({
  baseURL,
  timeout: 8000,
});
