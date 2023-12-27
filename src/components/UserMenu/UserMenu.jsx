import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authorization/authOperations';
import { selectUserName } from 'redux/selectors';
import { UserWrap, WelText, LogOutBtn } from './UserMenu.styled';
import { useTranslation } from 'react-i18next';

const UserMenu = () => {
  const { t } = useTranslation();
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <>
      <UserWrap>
        <WelText>
          {t('userMenu.welcome')}, {userName}
        </WelText>
        <LogOutBtn onClick={() => dispatch(logOut())}>
          {t('userMenu.loguotBtn')}
        </LogOutBtn>
      </UserWrap>
    </>
  );
};

export default UserMenu;
