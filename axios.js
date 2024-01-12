import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://067d-190-97-228-1.ngrok-free.app',
});

export const serverUrl = axiosInstance.getUri();
