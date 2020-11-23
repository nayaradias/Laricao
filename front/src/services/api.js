import axios from 'axios';
// import { NativeModules } from "react-native";
import { getToken, logout } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:3001/api/',
});


api.interceptors.request.use(async (config) => {
  const token = getToken();
  const headers = { ...config.headers };
  if (token) headers.Authorization = `Bearer ${token}`;
  config.validateStatus = (status) => {
    if (status === 401) {
      logout();
     // NativeModules.DevSettings.reload();
    } else {
      return status;
    }
  };
  return config;
});
export default api;