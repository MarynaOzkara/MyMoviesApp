import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormWrap = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 30px;
  margin-top: 50px;
  background-color: ${props => props.theme.movieWrap};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
export const FormTitle = styled.h3`
  font-size: 22px;
  color: ${props => props.theme.text};

  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  width: 100%;
  height: 50px;
  position: relative;
  color: ${props => props.theme.text};
  border: 1px solid ${props => props.theme.text};
  display: block;
  margin-top: 20px;
  /* margin-bottom: 20px; */
  border-radius: 10px;
`;
export const FormInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: 13px;
  color: ${props => props.theme.text};
  background: transparent;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  &::placeholder {
    color: ${props => props.theme.text};
  }
  &:valid + span {
    top: -8px;
    padding: 0 5px;
    background: ${props => props.theme.movieWrap};
  }
  &:focus + span {
    top: -8px;
    padding: 0 5px;
    background: ${props => props.theme.movieWrap};
  }
`;
export const Error = styled.div`
  margin-top: 5px;
`;
export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;
export const Span = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  color: ${props => props.theme.text};
  position: absolute;
  top: 16px;
  left: 10px;
  cursor: text;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const RegisterBtn = styled.button`
  font-size: 18px;
  border: none;
  padding: 14px 0;
  width: 100%;
  background-color: ${props => props.theme.regBtn};
  color: ${props => props.theme.movieWrap};
  border-radius: 10px;
  margin-top: 20px;

  border: 2px solid ${props => props.theme.regBtn};
  cursor: pointer;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: ${props => props.theme.movieWrap};
    color: ${props => props.theme.regBtn};
    border: 2px solid ${props => props.theme.regBtn};
  }
`;
export const AddInfo = styled.p`
  text-align: center;
  margin-top: 20px;
  color: ${props => props.theme.text};
  font-size: 16px;
`;
export const RegLink = styled(Link)`
  color: ${props => props.theme.regBtn};
`;
