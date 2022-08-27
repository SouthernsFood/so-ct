import axios from 'axios';

const API_URL = '/api/menu/';

// Get menu
const getMenu = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

const updateMenu = async (token, menu) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + menu.id, menu, config);
  return response.data;
};

const addNewMenuItem = async (token, menuItem) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, menuItem, config);
  return response.data;
};

const deleteMenuItem = async (token, menuItem) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + menuItem.id, config);
  return response.data;
};

const menuService = {
  getMenu,
  updateMenu,
  addNewMenuItem,
  deleteMenuItem,
};

export default menuService;