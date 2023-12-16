import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;
export const NavItem = styled.li`
  list-style: none;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${props => props.theme.brend};
  @media (min-width: 767px) {
    color: ${props => props.theme.acsent};
    padding: 4px 16px;
    border-radius: 4px;

    &.active {
      color: ${props => props.theme.brend};
      background-color: ${props => props.theme.acsent};
    }
    &:hover,
    :focus {
      color: ${props => props.theme.reverseBrend};
    }
  }
`;
export const LogoLink = styled(NavLink)`
  text-decoration: none;
`;
export const AuthWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;
export const MobNav = styled.div`
  text-align: center;
  background-color: white;
  padding: 40px 30px;
  color: tomato;
  z-index: 999;
  position: absolute;
  top: 74px;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  transition: transform 0.3s linear;
  &.active {
    transform: translateX(100%);
    overflow: hidden;
  }
  @media (min-width: 767px) {
    padding: 0px;
    background-color: transparent;
    position: static;
    flex-direction: row;
  }
`;
