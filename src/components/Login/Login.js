// компонент страницы авторизации

import './Login.css';
import IdentityForm from '../IdentityForm/IdentityForm';

function Login() {
  return (
    <IdentityForm
      title='Рады видеть!'
      submitButtonText='Войти'
      navigationText='Ещё не зарегистрированы?'
      link="/signup"
      linkText="Регистрация"
    >
      <label className="identity-form__label">E-mail
        <input type="email" className="identity-form__input" placeholder="введите e-mail" defaultValue="pochta@yandex.ru" />
      </label>
      <label className="identity-form__label">Пароль
        <input type="password" className="identity-form__input" placeholder="введите пароль" />
      </label>
    </IdentityForm>
  );
}

export default Login;
