import React from 'react';
import { Navigation, NavItem, Link } from './AppBar.styled';

const MoviesNav = () => {
  return (
    <>
      <Navigation>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/movies">Movies</Link>
        </NavItem>
        <NavItem>
          <Link to="/profile">Profile</Link>
        </NavItem>
      </Navigation>
    </>
  );
};

export default MoviesNav;
