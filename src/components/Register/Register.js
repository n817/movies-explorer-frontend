// компонент страницы регистрации

import './Register.css';
import IdentityForm from '../IdentityForm/IdentityForm';
import { useFormWithValidation } from '../../utils/Validation';
import { useState } from 'react';
import validator from 'validator';

function Register({ onRegister }) {

  const { values, errors, isValid, handleChange } = useFormWithValidation();

  // Проверка корректности ввода e-mail
  const [emailError, setEmailError] = useState('');
  const validateEmail = (e) => {
    const email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('Введите корректный e-mail!');
    }
    handleChange(e);
  }

  return (
    <IdentityForm
      title='Добро пожаловать!'
      submitButtonText='Зарегистрироваться'
      navigationText='Уже зарегистрированы?'
      link="/signin"
      linkText="Войти"
      onFormSubmit={ () => onRegister(values) }
    >
      <label className="identity-form__label">Имя
        <input
          type="text"
          name="name"
          value={values.name || ''}
          onChange={handleChange}
          className="identity-form__input"
          placeholder="введите имя" 
        />
      </label>
      <label className="identity-form__label">E-mail
        <input
          type="email"
          name="email"
          value={values.email || ''}
          onChange={(e) => validateEmail(e)}
          className="identity-form__input"
          placeholder="введите e-mail"
        />
        <span className="identity-form__error">{emailError}</span>
      </label>
      <label className="identity-form__label">Пароль
        <input
          type="password"
          name="password"
          value={values.password || ''}
          onChange={handleChange}
          className="identity-form__input"
          placeholder="введите пароль"
        />
      </label>
    </IdentityForm>
  );
}

export default Register;
