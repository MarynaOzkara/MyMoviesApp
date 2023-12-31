import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MobItem = styled.li`
  list-style: none;
`;
export const MobLink = styled(NavLink)`
  text-decoration: none;
  font-size: 26px;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${props => props.theme.acsent};
  &.active {
    color: ${props => props.theme.reverseBrend};
  }
  &:hover,
  :focus {
    color: ${props => props.theme.reverseBrend};
  }
`;
export const MobNav = styled.div`
  background-color: ${props => props.theme.brend};
  padding-top: 70px;
  z-index: 999;
  position: absolute;
  top: 74px;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
  flex-direction: column;

  @media (min-width: 767px) {
    display: none;
  }
`;
