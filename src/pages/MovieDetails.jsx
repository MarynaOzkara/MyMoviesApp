import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';

import {
  MovieDetailsWrap,
  MainWrap,
  Poster,
  AdditionalWrap,
  BackBtn,
  MoreLink,
  MovieTitle,
  MovieInfo,
  MovieInfoWrap,
  Aditional,
  AditionalList,
  AdditionalItem,
} from 'components/App.styled';
import { RiMovie2Line } from 'react-icons/ri';

import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { getMovieDetails } from 'redux/movies/movie-api';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectLenguage } from 'redux/selectors';

const MovieDetails = () => {
  const { t } = useTranslation();
  const { movieId } = useParams();
  const language = useSelector(selectLenguage);
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const from = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        setIsLoading(true);
        const details = await getMovieDetails(movieId, language);
        setMovieDetails(details);

        console.log(details);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesDetails();
  }, [movieId, language]);
  const handleClickBackBtn = () => {
    navigate(from.from.pathname);
    console.log(from.from.pathname);
  };
  const {
    original_title,
    title,
    genres,
    overview,
    release_date,
    poster_path,
    vote_average,
    runtime,
    production_countries,
  } = movieDetails;
  const userScore = Number(vote_average).toFixed(1);
  const hour = Math.trunc(runtime / 60);
  const min = runtime % 60;
  return (
    <main>
      {isLoading && <Loader />}
      {movieDetails && (
        <MovieDetailsWrap>
          <BackBtn type="button" onClick={handleClickBackBtn}>
            {t('movieDetails.button')}
          </BackBtn>

          <MainWrap>
            <Poster
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : `https://place-hold.it/300x455?text=No%20Poster%20Image&fontsize=18`
              }
              alt={original_title}
            />
            <MovieInfoWrap>
              <MovieTitle>
                {title}
                {''}({new Date(release_date).getFullYear()})
              </MovieTitle>
              <MovieInfo>
                {t('movieDetails.rating')}: {userScore}
              </MovieInfo>
              <MovieInfo>
                {t('movieDetails.duration')}: {hour}
                {t('movieDetails.h')} {min}
                {t('movieDetails.min')}
              </MovieInfo>
              <MovieInfo>{t('movieDetails.overview')}:</MovieInfo>
              <p>{overview}</p>
              <MovieInfo>{t('movieDetails.genres')}:</MovieInfo>
              {genres && genres.map(genre => genre.name).join(', ')}

              <MovieInfo>{t('movieDetails.countries')}:</MovieInfo>
              {production_countries &&
                production_countries
                  .map(production_country => production_country.name)
                  .join(', ')}
            </MovieInfoWrap>
          </MainWrap>
          <AdditionalWrap>
            <Aditional>{t('movieDetails.addInfo')}</Aditional>
            <AditionalList>
              <AdditionalItem>
                <MoreLink to="trailer" state={from}>
                  <RiMovie2Line />
                  {t('movieDetails.trailer')}
                </MoreLink>
              </AdditionalItem>
              <AdditionalItem>
                <MoreLink to="cast" state={from}>
                  <RiMovie2Line />
                  {t('movieDetails.cast')}
                </MoreLink>
              </AdditionalItem>
              <AdditionalItem>
                <MoreLink to="reviews" state={from}>
                  <RiMovie2Line />
                  {t('movieDetails.review')}
                </MoreLink>
              </AdditionalItem>
            </AditionalList>
          </AdditionalWrap>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </MovieDetailsWrap>
      )}
    </main>
  );
};
export default MovieDetails;
