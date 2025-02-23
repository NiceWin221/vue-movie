import axios from "axios";

const API_KEY = "dca61bcc";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (searchQuery) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        apikey: API_KEY,
        s: searchQuery,
      },
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching movies", error);
  }
};

export const fetchDetailMovie = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        apikey: API_KEY,
        i: movieId,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching detail movie", error);
  }
};
