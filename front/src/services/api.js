import axios from 'axios';
import { getData, logout } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:3001/api/',
});


api.interceptors.request.use(async (config) => {
  const token = getData("@token");
  const headers = { ...config.headers };
  // console.log("Token:", token);
  // console.log("headers:", headers);
  if (token) headers.Authorization = `Bearer ${token}`;
  config.validateStatus = (status) => {
    //console.log("Status:", status);
    if (status === 401) {
      logout();
    } else {
      return status;
    }
  };
  return config;
});
export default api;