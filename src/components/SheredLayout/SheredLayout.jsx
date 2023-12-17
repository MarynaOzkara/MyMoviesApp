import { Outlet } from 'react-router-dom';
import {
  HeaderWrap,
  Container,
  Header,
  NavWrap,
  BurgerBtn,
  LogoLink,
} from './SheredLayout.styled';
import { Suspense, useState } from 'react';
import Loader from 'components/Loader/Loader';
import AppBar from 'components/AppBar/AppBar';
import { ReactComponent as Logo } from 'images/logo.svg';

import { SlMenu, SlClose } from 'react-icons/sl';
import MobBar from 'components/MobBar/MobBar';

const SheredLayout = () => {
  const [isOpen, setOpen] = useState();
  const closeMobBar = () => setOpen(!isOpen);
  return (
    <>
      <Header>
        <HeaderWrap>
          <LogoLink to="/">
            <Logo />
          </LogoLink>
          <NavWrap>
            <AppBar />
            <BurgerBtn onClick={() => setOpen(!isOpen)}>
              {!isOpen ? (
                <SlMenu size={24} color="white" />
              ) : (
                <SlClose size={24} color="white" />
              )}
            </BurgerBtn>
          </NavWrap>
        </HeaderWrap>
        {isOpen && <MobBar closeMobBar={closeMobBar} />}
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
export default SheredLayout;
