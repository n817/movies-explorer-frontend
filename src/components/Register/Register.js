// компонент страницы регистрации

import './Register.css';
import IdentityForm from '../IdentityForm/IdentityForm';
import { useFormWithValidation } from '../../utils/Validation';

function Register({ onRegister }) {

  const { values, errors, isValid, handleChange } = useFormWithValidation();

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
          onChange={handleChange}
          className="identity-form__input"
          placeholder="введите e-mail"
        />
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
        <span className="identity-form__error">Что-то пошло не так...</span>
      </label>
    </IdentityForm>
  );
}

export default Register;
