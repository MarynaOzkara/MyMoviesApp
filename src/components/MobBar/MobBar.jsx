import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { MobItem, MobLink, MobNav } from './MobBar.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import ModeToggle from 'components/ModeToggle/ModeToggle';

const MobBar = ({ closeMobBar }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <MobNav>
        <MobItem>
          <MobLink to="/" onClick={closeMobBar}>
            Home
          </MobLink>
        </MobItem>
        <MobItem>
          <MobLink to="/movies" onClick={closeMobBar}>
            Movies
          </MobLink>
        </MobItem>
        <MobItem>
          <MobLink to="/profile" onClick={closeMobBar}>
            Profile
          </MobLink>
        </MobItem>
        {isLoggedIn ? <UserMenu /> : <AuthNav closeMobBar={closeMobBar} />}
        <ModeToggle />
      </MobNav>
    </>
  );
};

export default MobBar;
