import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import { FavBtn } from './Favorite.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  deleteFromFavorite,
} from 'redux/favorites/favoritesSlice';
import { selectFavorite } from 'redux/selectors';

const Favorite = ({ movie }) => {
  const dispatch = useDispatch();
  const favMovies = useSelector(selectFavorite);
  const isMovieInFavorite = favMovies.some(item => item.id === movie.id);
  return (
    <>
      {isMovieInFavorite ? (
        <FavBtn onClick={() => dispatch(deleteFromFavorite(movie))}>
          <IoHeartSharp size={34} color="white" />
        </FavBtn>
      ) : (
        <FavBtn
          onClick={() => {
            dispatch(addToFavorite(movie));
          }}
        >
          <IoHeartOutline size={34} color="white" />
        </FavBtn>
      )}
    </>
  );
};

export default Favorite;
