import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { Link, NavItem, Navigation } from './AppBar.styled';
import ModeToggle from 'components/ModeToggle/ModeToggle';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        <ModeToggle />
      </Navigation>
    </>
  );
};

export default AppBar;
