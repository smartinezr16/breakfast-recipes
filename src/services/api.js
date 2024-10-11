
import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchMealByFirstLetter = (letter) => {
  return axios.get(`${API_URL}/search.php?f=${letter}`);
};

export const fetchMealById = (id) => {
  return axios.get(`${API_URL}/lookup.php?i=${id}`);
};

export const searchMealByName = (name) => {
  return axios.get(`${API_URL}/search.php?s=${name}`);
};
