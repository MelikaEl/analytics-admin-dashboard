import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://6a268ac7a84f9d39e90764b1.mockapi.io', 
  headers: {
    'Content-Type': 'application/json',
  },
});
