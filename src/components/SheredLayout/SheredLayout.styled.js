import styled from 'styled-components';

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
export const NavWrap = styled.div``;
// export const NavWrap = styled.div`
//   text-align: center;
//   background-color: white;
//   padding: 40px 30px;
//   color: tomato;
//   z-index: 999;
//   position: fixed;
//   top: 74px;
//   right: 0;
//   width: 100%;
//   height: 100%;
//   transition: transform 0.3s linear;
//   &.active {
//     transform: translateX(100%);
//   }
//   @media (min-width: 767px) {
//     padding: 0px;
//     background-color: transparent;
//     position: static;
//   }
// `;
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
