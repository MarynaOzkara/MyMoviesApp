import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';

import React, { useState } from 'react';
import { FavBtn } from './Favorite.styled';
import { useDispatch } from 'react-redux';
import { addToFavorite } from 'redux/favorites/favoritesSlice';

const Favorite = ({ movie }) => {
  const dispatch = useDispatch();
  const [isFav, setFav] = useState();

  return (
    <>
      <FavBtn
        onClick={() => {
          setFav(!isFav);
          dispatch(addToFavorite(movie));
        }}
      >
        {!isFav ? (
          <IoHeartOutline size={34} color="white" />
        ) : (
          <IoHeartSharp size={34} color="white" />
        )}
      </FavBtn>
    </>
  );
};

export default Favorite;
