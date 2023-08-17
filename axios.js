import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://a46e-200-59-186-97.ngrok-free.app',
});

export const serverUrl = axiosInstance.getUri();
