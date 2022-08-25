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
  return response.data;
};

const updateEvent = async (token, event) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + event.id, event, config);
  
  return response.data;
};


const eventService = {
  getAllEvents,
  updateEvent,
};

export default eventService;