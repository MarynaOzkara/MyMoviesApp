import { Outlet } from 'react-router-dom';
import { HeaderWrap, Container, Header } from './SheredLayout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import AppBar from 'components/AppBar/AppBar';

const SheredLayout = () => {
  return (
    <>
      <Header>
        <HeaderWrap>
          <AppBar />
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
