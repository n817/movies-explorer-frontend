// компонент страницы регистрации

import './Register.css';
import IdentityForm from '../IdentityForm/IdentityForm';
import validator from 'validator';
import { useFormWithValidation } from '../../utils/Validation';

function Register({ onRegister }) {

  const { values, errors, isValid, handleChange } = useFormWithValidation();

  // Проверка корректности ввода e-mail
  const validateEmail = (e) => {
    const email = e.target.value;
    if (validator.isEmail(email)) {
      e.target.setCustomValidity('');
    } else {
      e.target.setCustomValidity('Введите корректный e-mail');
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
      isValid={isValid}
    >
      <label className="identity-form__label">Имя
        <input
          type="text"
          name="name"
          minLength="2"
          maxLength="30"
          value={values.name || ''}
          onChange={handleChange}
          className="identity-form__input"
          placeholder="введите имя" 
          required
        />
        <span className="identity-form__error">{errors.name}</span>
      </label>
      <label className="identity-form__label">E-mail
        <input
          type="email"
          name="email"
          value={values.email || ''}
          onChange={(e) => validateEmail(e)}
          className="identity-form__input"
          placeholder="введите e-mail"
          required
        />
        <span className="identity-form__error">{errors.email}</span>
      </label>
      <label className="identity-form__label">Пароль
        <input
          type="password"
          name="password"
          value={values.password || ''}
          onChange={handleChange}
          className="identity-form__input"
          placeholder="введите пароль"
          required
        />
        <span className="identity-form__error">{errors.password}</span>
      </label>
    </IdentityForm>
  );
}

export default Register;
