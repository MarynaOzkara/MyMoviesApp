import { createSlice } from '@reduxjs/toolkit';
import { searchMovies } from './movie-api';

const searchMoviesSlice = createSlice({
  name: 'searchMovies',
  initialState: {
    query: '',
    movies: [],
    page: 0,
    totalPages: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
      state.movies = [];
    },
    setQuery: (state, { payload }) => {
      state.query = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(searchMovies.pending, state => {
        state.isLoading = true;
      })
      .addCase(searchMovies.fulfilled, (state, { payload }) => {
        state.movies = state.movies.concat(payload.results);
        // state.movies = [...state.movies, ...payload.results];
        state.page = payload.page + 1;
        state.totalPages = payload.total_pages;
        state.isLoading = false;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { setPage, setQuery } = searchMoviesSlice.actions;
export const searchMoviesReducer = searchMoviesSlice.reducer;
