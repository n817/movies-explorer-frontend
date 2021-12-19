// компонент страницы авторизации

import './Login.css';
import IdentityForm from '../IdentityForm/IdentityForm';
import { useFormWithValidation } from '../../utils/Validation';
import { useState } from 'react';
import validator from 'validator';

function Login({ onLogin }) {

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
      title='Рады видеть!'
      submitButtonText='Войти'
      navigationText='Ещё не зарегистрированы?'
      link="/signup"
      linkText="Регистрация"
      onFormSubmit={ () => onLogin(values) }
    >
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

export default Login;
