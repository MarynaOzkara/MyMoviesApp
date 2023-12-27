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
import { useTranslation } from 'react-i18next';
const FormLogin = () => {
  const { t } = useTranslation();
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
        <FormTitle>{t('login.login')}</FormTitle>
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
            <ErrorMessage>{t('login.errorEmailMassage')}</ErrorMessage>
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
            <ErrorMessage>{t('login.errorPasswordMessage')}</ErrorMessage>
          )}
        </Error>
        <RegisterBtn type="submit">{t('login.loginBtn')}</RegisterBtn>
        <AddInfo>
          {t('login.addInfo')}{' '}
          <RegLink to="/signup">{t('login.signUpBtn')}</RegLink>
        </AddInfo>
      </FormWrap>
    </>
  );
};
export default FormLogin;
