import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrap = styled.div`
  max-width: 1200px;
  height: 74px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 15px;
`;
export const Header = styled.header`
  width: 100vw;
  padding: 10px 0;
  background-color: ${props => props.theme.brend};
  box-shadow: var(--shadow);
`;
export const LogoLink = styled(NavLink)`
  text-decoration: none;
`;
export const NavWrap = styled.div`
  display: flex;
`;

export const BurgerBtn = styled.button`
  display: block;
  width: 24px;
  height: 24px;
  background: transparent;
  margin-left: auto;
  border: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 767px) {
    display: none;
  }
`;
