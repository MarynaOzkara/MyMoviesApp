import SearchMovieForm from 'components/SearchMovieForm/SearchMovieForm';
import { useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import throttle from 'lodash.throttle';
import { Title } from 'components/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLenguage,
  selectSearchIsLoading,
  selectSearchMoviePage,
  selectSearchMovies,
  selectSearchQuery,
  selectSearchTotalPages,
} from 'redux/selectors';
import { searchMovies } from 'redux/movies/movie-api';
import { useTranslation } from 'react-i18next';

const Movies = () => {
  const { t } = useTranslation();
  const query = useSelector(selectSearchQuery);
  const movies = useSelector(selectSearchMovies);
  const isLoading = useSelector(selectSearchIsLoading);
  const page = useSelector(selectSearchMoviePage);
  const language = useSelector(selectLenguage);
  const totalPages = useSelector(selectSearchTotalPages);
  const dispatch = useDispatch();
  // console.log(query);
  // console.log(page);

  useEffect(() => {
    if (query)
      dispatch(searchMovies({ query: query, page: 1, language: language }));
  }, [dispatch, query, language]);
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
        dispatch(
          searchMovies({ query: query, page: page, language: language })
        );
        console.log(page);
        console.log(query);
      }

      // console.log(scrollHeight);
      // console.log(heightTop);
      // console.log(windowHeight);
    });
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [dispatch, page, query, totalPages, isLoading, language]);

  return (
    <main>
      <Title>{t('movies.subtitle')}</Title>
      <SearchMovieForm />
      {isLoading && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};
export default Movies;
