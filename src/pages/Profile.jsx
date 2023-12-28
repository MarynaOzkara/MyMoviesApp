import MoviesList from 'components/MoviesList/MoviesList';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'redux/selectors';

const Profile = () => {
  const { t } = useTranslation();
  const movies = useSelector(selectFavorite);
  return (
    <>
      <h2>{t('profile.favorite')}</h2>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};
export default Profile;
