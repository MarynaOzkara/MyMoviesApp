import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import ky from 'ky';

const API_KEY = '9cbfb65f6dca8309534fd5a09da9382d';
const API = ky.create({
  prefixUrl: 'https://api.themoviedb.org/3/',
  searchParams: {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
  },
});

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// axios.defaults.params = {
//   api_key: API_KEY,
//   language: 'en-US',
//   include_adult: false,
// };

export const getTrendingMovies = createAsyncThunk(
  'movies/getTrending',
  async (page, thunkAPI) => {
    console.log(page);
    try {
      const response = API.get('trending/movie/day', {
        searchParams: { page: page },
      }).json();
      console.log(response);
      return response;
    } catch (e) {
      console.log(e.message);
    }
  }
);

export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async ({ query, page }, thunkAPI) => {
    try {
      console.log(query);
      console.log(page);
      const response = await API.get('search/movie', {
        searchParams: { query: query, page: page },
      }).json();
      console.log(response);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getMovieDetails = async movieId => {
  const data = await API.get(`movie/${movieId}`).json();
  console.log(data);
  return data;
};

export const getMovieCast = async movieId => {
  const data = await API.get(`movie/${movieId}/credits`).json();
  return data.cast;
};
export const getMovieReview = async movieId => {
  const data = await API.get(`movie/${movieId}/reviews`).json();
  return data.results;
};

// https://api.themoviedb.org/3/movie/157336/videos
export const getMovieTraler = async movieId => {
  const data = await API.get(`movie/${movieId}/videos`).json();
  return data.results;
};
