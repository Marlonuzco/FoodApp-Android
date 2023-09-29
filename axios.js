import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://856a-200-59-186-100.ngrok-free.app',
});

export const serverUrl = axiosInstance.getUri();
