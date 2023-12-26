import React from 'react';
import { NavItem, Link, Autorization } from './AuthNav.styled';
import { useTranslation } from 'react-i18next';

const AuthNav = ({ closeMobBar }) => {
  const { t } = useTranslation();
  return (
    <>
      <Autorization>
        <NavItem>
          <Link to="/signup" onClick={closeMobBar}>
            {t('header.signUp')}
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/login" onClick={closeMobBar}>
            {t('header.login')}
          </Link>
        </NavItem>
      </Autorization>
    </>
  );
};

export default AuthNav;
