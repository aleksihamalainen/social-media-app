import axios from 'axios';

const baseUrl = '/api/users';

const login = async (credentials) => {
  const response = await axios.post('/api/login', credentials);
  return response.data;
};

const register = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

const findByUsername = async (username) => {
  const response = await axios.get(`${baseUrl}/${username}`);
  return response.data;
};

export default { login, register, findByUsername };
