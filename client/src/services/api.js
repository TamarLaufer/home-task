import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchImagesFromAPI = async ({ category, page, sortBy }) => {
  try {
    const response = await axios.get(`${API_URL}/images`, {
      params: { category, page, sortBy }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images from API');
  }
}; 