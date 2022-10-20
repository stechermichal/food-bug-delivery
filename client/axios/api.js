import axios from 'axios';

export const api = axios.create({
  baseURL: `http://localhost:3001/api`,
});

api.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${window.localStorage.getItem('jwt')}`;
  return request;
});

export default api;
