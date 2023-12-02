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

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const from = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        setIsLoading(true);
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);

        console.log(details);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesDetails();
  }, [movieId]);
  const handleClickBackBtn = () => {
    navigate(from.from.pathname);
    console.log(from.from.pathname);
  };
  const {
    original_title,
    genres,
    overview,
    release_date,
    poster_path,
    vote_average,
    runtime,
    production_countries,
  } = movieDetails;
  const userScore = Number(vote_average).toFixed(1);
  return (
    <main>
      {isLoading && <Loader />}
      {movieDetails && (
        <MovieDetailsWrap>
          <BackBtn type="button" onClick={handleClickBackBtn}>
            Go Back
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
                {original_title}
                {''}({new Date(release_date).getFullYear()})
              </MovieTitle>
              <MovieInfo>Rating: {userScore}</MovieInfo>
              <MovieInfo>Time: {runtime}</MovieInfo>
              <MovieInfo>Overview:</MovieInfo>
              <p>{overview}</p>
              <MovieInfo>Genres:</MovieInfo>
              {genres && genres.map(genre => genre.name).join(', ')}

              <MovieInfo>Countries:</MovieInfo>
              {production_countries &&
                production_countries
                  .map(production_country => production_country.name)
                  .join(', ')}
            </MovieInfoWrap>
          </MainWrap>
          <AdditionalWrap>
            <Aditional>Aditional information</Aditional>
            <AditionalList>
              <AdditionalItem>
                <MoreLink to="trailer" state={from}>
                  <RiMovie2Line />
                  Trailer
                </MoreLink>
              </AdditionalItem>
              <AdditionalItem>
                <MoreLink to="cast" state={from}>
                  <RiMovie2Line />
                  Cast
                </MoreLink>
              </AdditionalItem>
              <AdditionalItem>
                <MoreLink to="reviews" state={from}>
                  <RiMovie2Line />
                  Review
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
