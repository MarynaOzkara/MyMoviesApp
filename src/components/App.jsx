import { Navigate, Route, Routes } from 'react-router-dom';
import SheredLayout from './SheredLayout/SheredLayout';
import Cast from './Cast/Cast';
import Review from './Review/Review';
import Trailer from './Trailer/Trailer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from 'constants/themes';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/selectors';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Signup = lazy(() => import('pages/Signup'));
const Login = lazy(() => import('pages/Login'));
const Profile = lazy(() => import('pages/Profile'));

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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick
          theme="colored"
        />
      </>
    </ThemeProvider>
  );
};
