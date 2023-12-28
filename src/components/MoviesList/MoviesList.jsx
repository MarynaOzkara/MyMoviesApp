import { useLocation } from 'react-router-dom';
import {
  MovieList,
  MovieItem,
  MovieLink,
  Poster,
  Title,
  PosterWrap,
  FavWrap,
} from './MoviesList.styled';
import Favorite from 'components/Favorite/Favorite';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieList>
      {movies.map(({ id, title, poster_path }) => (
        <MovieItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <PosterWrap>
              <Poster
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300${poster_path}`
                    : `https://place-hold.it/300x455?text=No%20Poster%20Image&fontsize=18`
                }
                alt={title}
              />
            </PosterWrap>

            <Title>{title}</Title>
          </MovieLink>
          <FavWrap>
            <Favorite movie={{ id, title, poster_path }} />
          </FavWrap>
        </MovieItem>
      ))}
    </MovieList>
  );
};
export default MoviesList;
