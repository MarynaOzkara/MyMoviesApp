import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Autorization = styled.div`
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
  font-size: 26px;
  color: ${props => props.theme.acsent};
  &.active {
    color: ${props => props.theme.reverseBrend};
  }
  &:hover,
  :focus {
    color: ${props => props.theme.reverseBrend};
  }
  @media (min-width: 767px) {
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
  }
`;
