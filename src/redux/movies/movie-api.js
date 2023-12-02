import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '9cbfb65f6dca8309534fd5a09da9382d';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// axios.defaults.params = {
//   api_key: API_KEY,
//   language: 'en-US',
//   include_adult: false,
// };

export const getTrendingMovies = createAsyncThunk(
  'movies/getTrending',
  async (page, thunkAPI) => {
    try {
      const config = {
        params: {
          api_key: API_KEY,
          language: 'en-US',
          include_adult: false,
          page: page,
        },
      };
      // console.log(page);
      const response = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/day',
        config
      );
      // console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async ({ query, page }, thunkAPI) => {
    try {
      const params = {
        api_key: API_KEY,
        language: 'en-US',
        include_adult: false,
        query: query,
        page: page,
      };
      console.log(params);

      const response = await axios.get(
        'https://api.themoviedb.org/3/search/movie',
        { params }
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        include_adult: false,
      },
    }
  );

  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        include_adult: false,
      },
    }
  );
  return data.cast;
};
export const getMovieReview = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      include_adult: false,
    },
  });
  return data.results;
};

// https://api.themoviedb.org/3/movie/157336/videos
export const getMovieTraler = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/videos`,
    {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        include_adult: false,
      },
    }
  );
  return data.results;
};
