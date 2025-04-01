
import axios from 'axios';
import { getEnvs } from '../helpers';

const { VITE_API_URL } = getEnvs();

const calendarApi = axios.create({
  baseURL: VITE_API_URL,

});

// Add a request interceptor
calendarApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      
      config.headers['x-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default calendarApi;