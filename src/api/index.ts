import axios from 'axios';
import { RequestList } from '~/types/request';

const BASE_URL = 'http://movieapp-api-server.herokuapp.com';

export const requestApi = (): Promise<RequestList> => {
  const url = `${BASE_URL}/request`;
  return axios.get(url);
};
