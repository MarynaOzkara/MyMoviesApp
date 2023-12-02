import React from 'react';

import {
  FormWrap,
  FormTitle,
  FormLabel,
  FormInput,
  Span,
  RegisterBtn,
  AddInfo,
  RegLink,
} from 'components/FormRegistration/FormRegistration.styled';

const Login = () => {
  return (
    <main>
      <FormWrap autoComplete="false">
        <FormTitle>Log in</FormTitle>
        <FormLabel htmlFor="email">
          <FormInput type="email" name="email" id="email" required />
          <Span>Email</Span>
        </FormLabel>
        <FormLabel htmlFor="password">
          <FormInput type="password" name="password" id="password" required />
          <Span>Password</Span>
        </FormLabel>

        <RegisterBtn type="submit">Sign up</RegisterBtn>
        <AddInfo>
          Don't have an account, please <RegLink to="/signup">Register</RegLink>
        </AddInfo>
      </FormWrap>
    </main>
  );
};

export default Login;
