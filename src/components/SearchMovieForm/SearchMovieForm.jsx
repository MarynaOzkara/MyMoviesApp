import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, Form } from './SearchMovieForm.styled';
import { setPage, setQuery } from 'redux/movies/searchMoviesSlice';
import { selectSearchQuery } from 'redux/selectors';
import { useTranslation } from 'react-i18next';

const SearchMovieForm = () => {
  const { t } = useTranslation();
  const oldQuery = useSelector(selectSearchQuery);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.query.value;
    // console.log(query);

    // console.log(oldQuery);
    if (!query) {
      alert('Type movie name to start search!');
    }
    oldQuery === query
      ? alert('Write new movie name')
      : dispatch(setQuery(query));
    dispatch(setPage(1));
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          autoFocus
          placeholder="Search movie ..."
        />
        <Button type="submit">{t('movies.button')}</Button>
      </Form>
    </>
  );
};
export default SearchMovieForm;
