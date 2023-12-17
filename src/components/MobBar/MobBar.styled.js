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
  text-align: center;
  background-color: ${props => props.theme.brend};
  padding-top: 100px;
  z-index: 999;
  position: absolute;
  top: 74px;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  /* transform: translateX(-100%);
  transition: transform 0.3s linear;
  &.active {
    transform: translateX(0);
    overflow: hidden;
  } */
  @media (min-width: 767px) {
    display: none;
  }
`;
