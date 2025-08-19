import axios from 'axios';

const API_KEY = '51867053-bfaf2cb4d76f71bd93d38cf99';
const BASE_URL = 'https://pixabay.com/api/';

const DEFAULT_PARAMS = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export function getImagesByQuery(query) {
  const q = String(query || '').trim();
  const params = { ...DEFAULT_PARAMS, q };

  return axios.get(BASE_URL, { params }).then(({ data }) => data);
}