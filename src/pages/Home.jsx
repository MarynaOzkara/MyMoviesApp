import { Title } from 'components/App.styled';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect } from 'react';
import { getTrendingMovies } from 'redux/movies/movie-api';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectMovies,
  selectPage,
  selectTotalPages,
} from 'redux/selectors';
import throttle from 'lodash.throttle';

const Home = () => {
  const movies = useSelector(selectMovies);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  console.log(page);
  useEffect(() => {
    dispatch(getTrendingMovies(1));
  }, [dispatch]);

  useEffect(() => {
    const scrollHandler = throttle(e => {
      if (isLoading === true) {
        return;
      }
      const scrollHeight = e.target.documentElement.scrollHeight;
      const heightTop = e.target.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      if (
        scrollHeight - (heightTop + windowHeight) < 100 &&
        page < totalPages
      ) {
        console.log(e);
        console.log(page);
        dispatch(getTrendingMovies(page));
      }

      // console.log(scrollHeight);
      // console.log(heightTop);
      // console.log(windowHeight);
    });
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [dispatch, page, totalPages, isLoading]);

  return (
    <main>
      <Title>Trending today</Title>
      {isLoading && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};
export default Home;
