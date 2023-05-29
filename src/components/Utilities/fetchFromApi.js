
import axios from "axios";
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    part: 'snippet',
    maxResults: 100
  },
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '7931417b8emsh656026bcb50256fp1b37a3jsnce31e03880c9',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
