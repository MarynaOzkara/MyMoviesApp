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
import { useTranslation } from 'react-i18next';

const FormRegistration = () => {
  const { t } = useTranslation();
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
        <FormTitle>{t('signup.signup')}</FormTitle>
        <FormLabel htmlFor="name">
          <FormInput
            type="text"
            id="name"
            {...register('name', {
              minLength: 3,
              pattern: /^[a-zA-Zа-яА-ЯЇїІіЄєҐґ]*$/,
            })}
            required
          />
          <Span>Name</Span>
        </FormLabel>
        <Error>
          {errors.name?.type === 'minLength' && (
            <ErrorMessage>{t('signup.nameErrorLength')}</ErrorMessage>
          )}
          {errors.name?.type === 'pattern' && (
            <ErrorMessage>{t('signup.nameErrorSimbols')}</ErrorMessage>
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
            <ErrorMessage>{t('signup.emailError')}</ErrorMessage>
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
            <ErrorMessage>{t('signup.errorPasswordMessage')}</ErrorMessage>
          )}
        </Error>
        <RegisterBtn type="submit">{t('signup.signupBtn')}</RegisterBtn>
        <AddInfo>
          {t('signup.addInfo')}{' '}
          <RegLink to="/login">{t('signup.loginBtn')}</RegLink>
        </AddInfo>
      </FormWrap>
    </>
  );
};

export default FormRegistration;
