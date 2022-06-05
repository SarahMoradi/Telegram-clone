import axios from 'axios';

const baseApiAddress = 'http://localhost:4000';

const mainApi = axios.create({ baseURL: baseApiAddress, timeout: 30000 });

mainApi.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

mainApi.interceptors.response.use(null, (error) => {
  const status = error.response ? error.response.status : null;
  if (status === 401) {
    localStorage.removeItem('token');
    return Promise.reject(error);
  }
  return Promise.reject(error);
});

export default mainApi;
