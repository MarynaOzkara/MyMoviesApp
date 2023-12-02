import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import { ReviewWrap, ReviewList, ReviewText } from './Review.styled';
import { getMovieReview } from 'redux/movies/movie-api';

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieReview = async () => {
      try {
        setIsLoading(true);
        const reviews = await getMovieReview(movieId);
        setReviews(reviews);

        console.log(reviews);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReview();
  }, [movieId]);
  return (
    <div>
      <ReviewList>
        {isLoading && <Loader />}
        {reviews.length === 0 ? (
          <ReviewWrap>There is no review</ReviewWrap>
        ) : (
          reviews.map(({ id, author, content }) => (
            <ReviewWrap key={id}>
              <b>{author}</b>
              <ReviewText>{content}</ReviewText>
            </ReviewWrap>
          ))
        )}
      </ReviewList>
    </div>
  );
};
export default Review;
