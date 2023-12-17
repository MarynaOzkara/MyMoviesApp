import React from 'react';
import { NavItem, Link, Autorization } from './AuthNav.styled';

const AuthNav = ({ closeMobBar }) => {
  return (
    <>
      <Autorization>
        <NavItem>
          <Link to="/signup" onClick={closeMobBar}>
            Sign up
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/login" onClick={closeMobBar}>
            Log in
          </Link>
        </NavItem>
      </Autorization>
    </>
  );
};

export default AuthNav;
