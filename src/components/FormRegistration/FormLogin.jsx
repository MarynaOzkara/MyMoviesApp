import React from 'react';
import {
  FormInput,
  FormLabel,
  FormWrap,
  RegisterBtn,
  FormTitle,
  Span,
  Error,
  ErrorMessage,
  AddInfo,
  RegLink,
} from './FormRegistration.styled';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from 'redux/authorization/authOperations';
const FormLogin = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const submit = data => {
    dispatch(login(data));
    console.log(data);
    // reset();
  };
  return (
    <>
      <FormWrap autoComplete="off" onSubmit={handleSubmit(submit)}>
        <FormTitle>Log in</FormTitle>
        <FormLabel htmlFor="email">
          <FormInput
            type="email"
            {...register('email', {
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            id="email"
            required
          />
          <Span>Email</Span>
        </FormLabel>
        <Error>
          {errors.email?.type === 'pattern' && (
            <ErrorMessage>Type valid email addres</ErrorMessage>
          )}
        </Error>
        <FormLabel htmlFor="password">
          <FormInput
            type="password"
            {...register('password', {
              pattern: /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12})*$/,
            })}
            id="password"
            required
          />
          <Span>Password</Span>
        </FormLabel>
        <Error>
          {errors.password?.type === 'pattern' && (
            <ErrorMessage>
              Password should have min 6 max 12 simbols: one digit from 0-9, 1
              lowercase and 1 uppercase characters
            </ErrorMessage>
          )}
        </Error>
        <RegisterBtn type="submit">Sign up</RegisterBtn>
        <AddInfo>
          Don't have an account? <RegLink to="/signup">Sign up</RegLink>
        </AddInfo>
      </FormWrap>
    </>
  );
};
export default FormLogin;
