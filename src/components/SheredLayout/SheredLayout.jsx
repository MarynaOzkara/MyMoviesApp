import { Outlet } from 'react-router-dom';
import {
  HeaderWrap,
  Container,
  Header,
  Link,
  Navigation,
  NavItem,
  Autorization,
  LogoLink,
} from './SheredLayout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import ModeToggle from 'components/ModeToggle/ModeToggle';
import { ReactComponent as Logo } from 'images/logo.svg';

const SheredLayout = () => {
  return (
    <>
      <Header>
        <HeaderWrap>
          <Navigation>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/movies">Movies</Link>
            </NavItem>
          </Navigation>
          <LogoLink to="/">
            <Logo />
          </LogoLink>
          <Autorization>
            <NavItem>
              <Link to="/signup">Sign up</Link>
            </NavItem>
            <NavItem>
              <Link to="/login">Log in</Link>
            </NavItem>
            <NavItem>
              <Link to="/profile">Profile</Link>
            </NavItem>
            <ModeToggle />
          </Autorization>
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
