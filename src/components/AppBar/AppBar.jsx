import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { Link, NavItem, Navigation } from './AppBar.styled';
import ModeToggle from 'components/ModeToggle/ModeToggle';
import Languages from 'components/Languages/Languages';
import { useTranslation } from 'react-i18next';

const AppBar = () => {
  const { t } = useTranslation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Navigation>
        <NavItem>
          <Link to="/">{t('header.home')}</Link>
        </NavItem>
        <NavItem>
          <Link to="/movies">{t('header.movies')}</Link>
        </NavItem>
        <NavItem>
          <Link to="/profile">{t('header.profile')}</Link>
        </NavItem>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        <Languages />
        <ModeToggle />
      </Navigation>
    </>
  );
};

export default AppBar;
