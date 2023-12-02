import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#f1f1f1',
  text: '#5b5b5b',
  bg: '#f1f1f1',
  brend: 'tomato',
  reverseBrend: '#3A001E',
  toggleModal: 'tomato',
  acsent: 'white',
  movieWrap: 'white',
  regBtn: 'tomato',
};
export const darkTheme = {
  body: '#56423D',
  text: '#ffffff',
  bg: '#56423D',
  brend: '#3A001E',
  reverseBrend: 'tomato',
  toggleModal: 'white',
  acsent: 'white',
  movieWrap: '#3A001E',
  regBtn: 'white',
};

export const GlobalStyles = createGlobalStyle`
body{
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
 
}
`;
