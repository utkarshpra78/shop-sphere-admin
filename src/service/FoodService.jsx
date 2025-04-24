import axios from 'axios';

const API_URL = import.meta.env.VITE_WEB_URL 

export const addFood = async (foodData, image) => {
  const formData = new FormData();
  formData.append('food', JSON.stringify(foodData));
  formData.append('file', image);

  try {
    const response = await axios.post(`${import.meta.env.VITE_WEB_URL}/api/foods`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.status === 200 || response.status === 201;
  } catch (err) {
    console.error("Error adding food:", err);
    throw err;
  }
};

export const getFood = async () => { 
  try {
    const response = await axios.get(`${import.meta.env.VITE_WEB_URL}/api/foods`);
    return response.data;
  } catch (err) {
    console.error("Error fetching food:", err);
    throw err;
  }
};

export const deleteFood = async (foodId) => {
  try {
    const response = await axios.delete(`${import.meta.env.VITE_WEB_URL}/api/foods/${foodId}`);
    return response.status === 200;
  } catch (err) {
    console.error("Error deleting food:", err);
    throw err;
  }
};