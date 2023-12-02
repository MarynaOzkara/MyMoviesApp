import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrap = styled.div`
  max-width: 1200px;
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
export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;
export const Autorization = styled.div`
  display: flex;
  gap: 20px;
`;
export const NavItem = styled.li`
  list-style: none;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.acsent};
  font-size: 20px;
  padding: 4px 16px;
  border-radius: 4px;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: ${props => props.theme.brend};
    background-color: ${props => props.theme.acsent};
  }
  &:hover,
  :focus {
    color: ${props => props.theme.reverseBrend};
  }
`;
