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
import { signup } from 'redux/authorization/authOperations';

const FormRegistration = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const submit = data => {
    dispatch(signup(data));
    // console.log(data);
    // reset();
  };
  return (
    <>
      <FormWrap autoComplete="off" onSubmit={handleSubmit(submit)}>
        <FormTitle>Sign up</FormTitle>
        <FormLabel htmlFor="name">
          <FormInput
            type="text"
            id="name"
            {...register('name', {
              minLength: 3,
              pattern: /^[a-zA-Zа-яА-Я]*$/,
            })}
            required
          />
          <Span>Name</Span>
        </FormLabel>
        <Error>
          {errors.name?.type === 'minLength' && (
            <ErrorMessage>Name should have min 3 simbols</ErrorMessage>
          )}
          {errors.name?.type === 'pattern' && (
            <ErrorMessage>Name should consist of letters</ErrorMessage>
          )}
        </Error>
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
          Already have an account, please <RegLink to="/login">Log in</RegLink>
        </AddInfo>
      </FormWrap>
    </>
  );
};

export default FormRegistration;
