// компонент страницы авторизации

import './Login.css';
import IdentityForm from '../IdentityForm/IdentityForm';
import { useFormWithValidation } from '../../utils/Validation';

function Login({ onLogin }) {

  const { values, errors, isValid, handleChange } = useFormWithValidation();
  
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
      </label>
    </IdentityForm>
  );
}

export default Login;
