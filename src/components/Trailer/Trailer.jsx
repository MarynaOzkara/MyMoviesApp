import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieTraler } from 'redux/movies/movie-api';
import Loader from 'components/Loader/Loader';
import ReactPlayer from 'react-player/youtube';
import { TrailerContainer, TrailerWrap } from './Trailer.styled';
const Trailer = () => {
  const { movieId } = useParams();
  const [tralerKey, setTralerKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieVideo = async () => {
      try {
        setIsLoading(true);
        const videos = await getMovieTraler(movieId);
        const traler = videos.find(video => video.official === true);
        const tralerKey = traler.key;
        setTralerKey(tralerKey);

        console.log(tralerKey);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieVideo();
  }, [movieId]);
  return (
    <>
      {isLoading && <Loader />}

      {tralerKey && (
        <TrailerContainer>
          <TrailerWrap>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${tralerKey}`}
              controls
              width="100%"
              height="100%"
            />
          </TrailerWrap>
        </TrailerContainer>
      )}
    </>
  );
};
export default Trailer;
