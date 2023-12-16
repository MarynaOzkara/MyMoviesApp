import { Outlet } from 'react-router-dom';
import {
  HeaderWrap,
  Container,
  Header,
  NavWrap,
  BurgerBtn,
} from './SheredLayout.styled';
import { Suspense, useState } from 'react';
import Loader from 'components/Loader/Loader';
import AppBar from 'components/AppBar/AppBar';
import { ReactComponent as Logo } from 'images/logo.svg';
import { LogoLink } from 'components/AppBar/AppBar.styled';
import { ReactComponent as BurgerMenu } from 'images/burger.svg';

const SheredLayout = () => {
  const [isOpen, setOpen] = useState();
  return (
    <>
      <Header>
        <HeaderWrap>
          <LogoLink to="/">
            <Logo />
          </LogoLink>
          <NavWrap>{isOpen && <AppBar />}</NavWrap>
          <BurgerBtn onClick={() => setOpen(!isOpen)}>
            <BurgerMenu />
          </BurgerBtn>
        </HeaderWrap>
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
