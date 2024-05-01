import axios from 'axios';

export const fetchAllCards = async ({ page = 1, limit, params = [] }) => {
  const searchParams = params.join('&');

  const response = await axios.get(
    `/adverts?page=${page}&limit=${limit}&${searchParams}`
  );
  return response.data;
};
