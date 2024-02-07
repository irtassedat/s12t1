// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
  headers: {
    'Secret-Custom-Header': 'token'
  }
});

export default axiosInstance;
