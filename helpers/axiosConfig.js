import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://10.130.10.31:8000/api',
});

export default instance;
