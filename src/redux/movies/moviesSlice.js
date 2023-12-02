import { createSlice } from '@reduxjs/toolkit';
import { getTrendingMovies } from './movie-api';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    page: 0,
    totalPages: 0,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getTrendingMovies.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTrendingMovies.fulfilled, (state, { payload }) => {
        state.movies = [...state.movies, ...payload.results];
        state.page = payload.page + 1;
        state.totalPages = payload.total_pages;
        state.isLoading = false;
      })
      .addCase(getTrendingMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const moviesReducer = moviesSlice.reducer;
