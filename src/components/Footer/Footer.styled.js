import styled from 'styled-components';
export const FooterWrap = styled.div`
  width: 100%;
  height: 40px;
  /* position: fixed;
  bottom: 0; */
  background-color: var(--color-brend);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FooterText = styled.p`
  font-size: var(--fs-ss);
`;
export const FooterLink = styled.a`
  color: var(--color-acsent);
  text-decoration: none;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    color: var(--color-reverse-brend);
  }
`;
