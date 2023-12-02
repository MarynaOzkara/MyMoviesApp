import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { Navigate, Route, Routes } from 'react-router-dom';
import SheredLayout from './SheredLayout/SheredLayout';
import Cast from './Cast/Cast';
import Review from './Review/Review';
import Profile from 'pages/Profile';
import Trailer from './Trailer/Trailer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from 'constants/themes';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/selectors';
import Signup from 'pages/Signup';
import Login from 'pages/Login';

export const App = () => {
  const theme = useSelector(selectTheme);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <>
        <Routes>
          <Route path="/" element={<SheredLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="trailer" element={<Trailer />} />
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Review />} />
            </Route>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </>
    </ThemeProvider>
  );
};
