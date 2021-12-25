// компонент, который отвечает за отображение кнопок регистрации/ авторизации на странице лэндинга

import './AuthMenu.css';

import { Link } from 'react-router-dom';

function AuthMenu() {
  return (
    <div className="auth-menu">
      <Link to="/signup" className="auth-menu__register-link button-hover">
        Регистрация
      </Link>
      <Link to="/signin">
        <button className="auth-menu__login-button button-hover">Войти</button>
      </Link>
    </div>
  );
}

export default AuthMenu;
