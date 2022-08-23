import axios from 'axios';

const API_URL = '/api/events/';

// Get all events
const getAllEvents = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  console.log(response.data);

  return response.data;
};

const eventService = {
  getAllEvents,
};

export default eventService;