const { createSlice } = require('@reduxjs/toolkit');

const favoriteSlise = createSlice({
  name: 'favorites',
  initialState: {
    movies: [],
    isLoading: false,
  },
  reducers: {
    addToFavorite(state, action) {
      state.movies.push(action.payload);
    },
    deleteFromFavorite(state, action) {
      state.movies = state.movies.filter(el => el.id !== action.payload.id);
    },
  },
});

export const { addToFavorite, deleteFromFavorite } = favoriteSlise.actions;
export const favoriteReducer = favoriteSlise.reducer;
