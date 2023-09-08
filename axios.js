import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://9dd3-200-59-186-98.ngrok-free.app',
});

export const serverUrl = axiosInstance.getUri();
