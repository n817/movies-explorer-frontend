// компонент страницы регистрации

import './Register.css';
import IdentityForm from '../IdentityForm/IdentityForm';

function Register() {
  return (
    <IdentityForm
      title='Добро пожаловать!'
      submitButtonText='Зарегистрироваться'
      navigationText='Уже зарегистрированы?'
      link="/signin"
      linkText="Войти"
    >
      <label className="identity-form__label">Имя
        <input type="text" className="identity-form__input" placeholder="введите имя" defaultValue="Николай" />
      </label>
      <label className="identity-form__label">E-mail
        <input type="email" className="identity-form__input" placeholder="введите e-mail" defaultValue="pochta@yandex.ru" />
      </label>
      <label className="identity-form__label">Пароль
        <input type="password" className="identity-form__input" placeholder="введите пароль" />
        <span className="identity-form__error">Что-то пошло не так...</span>
      </label>
    </IdentityForm>
  );
}

export default Register;
