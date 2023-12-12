import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authorization/authOperations';
import { selectUserName } from 'redux/selectors';
import { UserWrap, WelText, LogOutBtn } from './UserMenu.styled';

const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <>
      <UserWrap>
        <WelText>Welcome back, {userName}</WelText>
        <LogOutBtn onClick={() => dispatch(logOut())}>Logout</LogOutBtn>
      </UserWrap>
    </>
  );
};

export default UserMenu;
