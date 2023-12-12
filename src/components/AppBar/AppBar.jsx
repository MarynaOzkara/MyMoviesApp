import React from 'react';
import MoviesNav from './MoviesNav';
import { ReactComponent as Logo } from 'images/logo.svg';
import { LogoLink } from './AppBar.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { AuthWrap } from './AppBar.styled';
import ModeToggle from 'components/ModeToggle/ModeToggle';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <MoviesNav />
      <LogoLink to="/">
        <Logo />
      </LogoLink>
      <AuthWrap>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        <ModeToggle />
      </AuthWrap>
    </>
  );
};

export default AppBar;
