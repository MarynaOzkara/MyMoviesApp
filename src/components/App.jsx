import { Navigate, Route, Routes } from 'react-router-dom';
import SheredLayout from './SheredLayout/SheredLayout';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from 'constants/themes';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/selectors';
import { Suspense, lazy, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from 'routes/PublicRoutes';
import PrivateRoutes from 'routes/PrivateRoutes';
import { refreshUser } from 'redux/authorization/authOperations';
import Loader from './Loader/Loader';
// import '../i18n';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Signup = lazy(() => import('pages/Signup'));
const Login = lazy(() => import('pages/Login'));
const Profile = lazy(() => import('pages/Profile'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Trailer = lazy(() => import('components/Trailer/Trailer'));
const Review = lazy(() => import('components/Review/Review'));

export const App = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<SheredLayout />}>
              <Route index element={<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="movies/:movieId" element={<MovieDetails />}>
                <Route path="trailer" element={<Trailer />} />
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Review />} />
              </Route>
              <Route
                path="/signup"
                element={
                  <PublicRoute>
                    <Signup />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoutes>
                    <Profile />
                  </PrivateRoutes>
                }
              />

              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          theme="colored"
        />
      </>
    </ThemeProvider>
  );
};
