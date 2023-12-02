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
// import { authReducer } from './authorization/authSlice';

const themePersistConfig = {
  key: 'theme',
  storage,
};
// const authPersistCongig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };
const reduser = combineReducers({
  movies: moviesReducer,
  searchMovies: searchMoviesReducer,
  theme: persistReducer(themePersistConfig, themeReducer),
  // auth: persistReducer(authPersistCongig, authReducer),
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
