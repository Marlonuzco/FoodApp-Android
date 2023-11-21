import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://4cac-200-59-186-99.ngrok-free.app',
});

export const serverUrl = axiosInstance.getUri();
