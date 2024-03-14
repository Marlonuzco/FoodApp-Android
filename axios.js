import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://744b-200-59-186-190.ngrok-free.app',
});

export const serverUrl = axiosInstance.getUri();
