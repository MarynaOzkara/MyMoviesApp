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
