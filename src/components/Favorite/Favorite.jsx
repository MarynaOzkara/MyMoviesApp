import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import { FavBtn } from './Favorite.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  deleteFromFavorite,
} from 'redux/favorites/favoritesSlice';
import { selectFavorite, selectIsLoggedIn } from 'redux/selectors';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const Favorite = ({ movie }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
            isLoggedIn
              ? dispatch(addToFavorite(movie))
              : toast.error(t('home.errorFav'));
          }}
        >
          <IoHeartOutline size={34} color="white" />
        </FavBtn>
      )}
    </>
  );
};

export default Favorite;
