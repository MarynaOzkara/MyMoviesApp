import React from 'react';
import { NavItem, Link, Autorization } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <>
      <Autorization>
        <NavItem>
          <Link to="/signup">Sign up</Link>
        </NavItem>
        <NavItem>
          <Link to="/login">Log in</Link>
        </NavItem>
      </Autorization>
    </>
  );
};

export default AuthNav;
