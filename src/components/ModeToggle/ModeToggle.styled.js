import styled from 'styled-components';
export const ToggleWrap = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 46px;
  height: 25px;
`;
export const ToggleBol = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.bg};
  border-radius: 50px;

  &::before {
    position: absolute;
    top: 2px;
    left: 3px;
    content: '';
    height: 20px;
    width: 20px;
    background-color: ${props => props.theme.toggleModal};
    filter: drop-shadow(rgba(0, 0, 0, 0.25) 2px 1px 6px);
    border-radius: 50%;
    transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const ToggleInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;

  &:checked + label > span::before {
    transform: translateX(18px);
  }
`;
