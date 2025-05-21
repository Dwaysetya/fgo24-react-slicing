import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
});

export const getMovies = async () => {
  const response = await axiosInstance.get(
    `/movie/now_playing?language=en-US&page=1&region=id&api_key=${API_KEY}`
  );
  console.log("aaa", response.data.resultss);
  return response.data.results;
};

