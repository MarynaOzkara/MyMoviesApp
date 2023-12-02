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

// export async function onCliсkBtnWatchGallery(event) {
//   try {
//     if (event.target.classList.contains('watch-trailer-btn-gallery')) {
//       const filmId = event.target.dataset.id;
//       const results = await fetchMovieTrailer(filmId);
//       const youtubeKey = results[0].key;
//       renderTrailer(youtubeKey);
//       showTrailerWindow();
//       closeOnEscClick(event);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// // функція додавання розмітки в DOM
// function renderTrailer(youtubeKey) {
//   const markup = templateTrailer(youtubeKey);
//   const trailerPlayerRef = document.querySelector('.modal-trailer');
//   trailerPlayerRef.innerHTML = markup;
// }

// // функція створення розмітки
// function templateTrailer(youtubeKey) {
//   return `
//     <iframe
//     class="youtube-video"
//     src="https://www.youtube.com/embed/${youtubeKey}"
//     title="YouTube video player"
//     frameborder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     allowfullscreen
//   ></iframe>
// `;
// }

// export function showTrailerWindow() {
//   backdropTrailer.classList.remove('is-hidden');

//   document.addEventListener('keydown', closeOnEscClick);
// }

// const backdropTrailer = document.querySelector('.backdrop-trailer');

// export function closeTrailer() {
//   trailerPlayerRef.innerHTML = '';

//   backdropTrailer.classList.add('is-hidden');

//   document.removeEventListener('keydown', closeOnEscClick);
// }
