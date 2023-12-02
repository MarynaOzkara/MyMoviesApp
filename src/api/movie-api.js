import axios from 'axios';
const API_KEY = '9cbfb65f6dca8309534fd5a09da9382d';
const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
  },
};
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
  include_adult: false,
};

export const getTrendingMovie = async page => {
  const { data } = await axios.get(`trending/movie/day`, {
    params: {
      page,
    },
  });
  // console.log(data);
  return data.results;
};

// export const getTrendingMovie = async page => {
//   const { data } = await axios.get(`trending/movie/day`, {
//     params: {
//       api_key: API_KEY,
//       language: 'en-US',
//       page,
//       include_adult: false,
//     },
//   });
//   console.log(data);
//   return data.results;
// };

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`movie/${movieId}`, params);
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`, params);
  return data.cast;
};
export const getMovieReview = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, params);
  return data.results;
};

export const searchMovie = async query => {
  console.log(query);
  const { data } = await axios.get(`search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query,
      include_adult: false,
    },
  });

  return data.results;
};
