import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '',
});

export const serverUrl = axiosInstance.getUri();
