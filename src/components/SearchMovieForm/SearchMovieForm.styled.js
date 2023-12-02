import styled from 'styled-components';

export const Input = styled.input`
  width: 270px;
  height: 40px;
  border: none;
  outline: none;
  border: 2px solid ${props => props.theme.brend};
  border-radius: 4px;
  padding-left: 20px;

  &::placeholder {
    font-size: 16px;
  }
  @media (min-width: 767px) {
    width: 500px;
  }
`;
export const Button = styled.button`
  display: block;
  border: none;
  border-radius: 5px;
  width: 60px;
  height: 40px;
  font-size: var(--fs-ss);
  background-color: ${props => props.theme.brend};
  color: ${props => props.theme.acsent};

  cursor: pointer;
  @media (min-width: 767px) {
    width: 100px;
    height: 44px;
    font-size: var(--fs-md);
  }

  &:hover,
  :focus {
    background-color: ${props => props.theme.acsent};
    color: ${props => props.theme.brend};
    border: 2px solid ${props => props.theme.brend};
  }
`;
export const Form = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 30px;
  @media (min-width: 767px) {
    gap: 20px;
  }
`;
