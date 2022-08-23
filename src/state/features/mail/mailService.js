import axios from 'axios';

const API_URL = '/api/mailer/';

// Get all mail
const getAll = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + 'inbox', config);
  // console.log(response.data);

  return response.data;
};

const mailService = {
  getAll,
};

export default mailService;