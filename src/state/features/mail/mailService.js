import axios from 'axios';

const API_URL = '/api/mailer/';

// Get all mail
const getAllEmails = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + 'inbox', config);
  return response.data;
};

const mailService = {
  getAllEmails,
};

export default mailService;