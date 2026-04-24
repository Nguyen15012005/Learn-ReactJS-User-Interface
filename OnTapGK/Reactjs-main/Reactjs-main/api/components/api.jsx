import axios from 'axios';

const API_URL = 'https://698312909c3efeb892a44b29.mockapi.io/user';

export const getUsers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createUser = async (name) => {
  const res = await axios.post(API_URL, { name });
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};