import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from './movies/moviesSlice';
import { searchMoviesReducer } from './movies/searchMoviesSlice';
import { themeReducer } from './theme/themeSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './authorization/authSlice';
import { lenguageReducer } from './lenguages/lenguageSlice';
import { favoriteReducer } from './favorites/favoritesSlice';

const themePersistConfig = {
  key: 'theme',
  storage,
};
const authPersistCongig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const lenguagePresistConfig = {
  key: 'lenguage',
  storage,
};
const favoritePersistConfig = {
  key: 'favorite',
  storage,
};
const reduser = combineReducers({
  movies: moviesReducer,
  searchMovies: searchMoviesReducer,
  theme: persistReducer(themePersistConfig, themeReducer),
  auth: persistReducer(authPersistCongig, authReducer),
  lenguage: persistReducer(lenguagePresistConfig, lenguageReducer),
  favorite: persistReducer(favoritePersistConfig, favoriteReducer),
});
export const store = configureStore({
  reducer: reduser,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
