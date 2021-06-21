import axios from 'axios';

const baseUrl = '/api/users';

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const login = async (credentials) => {
  const response = await axios.post('/api/login', credentials);
  return response.data;
};

const register = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

const findByUsername = async (username) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(`${baseUrl}/${username}`, config);
  return response.data;
};

export default { setToken, login, register, findByUsername };
