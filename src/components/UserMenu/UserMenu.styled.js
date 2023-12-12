import styled from 'styled-components';

export const UserWrap = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
export const WelText = styled.p`
  color: white;
`;
export const LogOutBtn = styled.button`
  border: none;
  padding: 4px 8px;
  background-color: ${props => props.theme.acsent};
  color: ${props => props.theme.brend};
  border-radius: var(--radii);
  border: 2px solid ${props => props.theme.acsent};
  cursor: pointer;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: ${props => props.theme.brend};
    color: ${props => props.theme.acsent};
    border: 2px solid ${props => props.theme.acsent};
  }
`;
