import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { MobItem, MobLink, MobNav } from './MobBar.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import ModeToggle from 'components/ModeToggle/ModeToggle';
import Languages from 'components/Languages/Languages';
import { useTranslation } from 'react-i18next';

const MobBar = ({ closeMobBar }) => {
  const { t } = useTranslation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <MobNav>
        <MobItem>
          <MobLink to="/" onClick={closeMobBar}>
            {t('header.home')}
          </MobLink>
        </MobItem>
        <MobItem>
          <MobLink to="/movies" onClick={closeMobBar}>
            {t('header.movies')}
          </MobLink>
        </MobItem>
        <MobItem>
          <MobLink to="/profile" onClick={closeMobBar}>
            {t('header.profile')}
          </MobLink>
        </MobItem>
        {isLoggedIn ? <UserMenu /> : <AuthNav closeMobBar={closeMobBar} />}

        <ModeToggle />
        <Languages />
      </MobNav>
    </>
  );
};

export default MobBar;
