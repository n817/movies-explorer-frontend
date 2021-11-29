// компонент, который отрисовывает шапку сайта на страницу

import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Header( {loggedIn} ) {

  return (
    <header className={`header ${loggedIn ? '' : 'header_landing'}`}>
      <div className="header__container">
        <Link to="/" className="header__logo button-hover">
          <img src={logo} alt="Логотип"/>
        </Link>
        <div className="header__auth-section">
          <Link to="/signup" className="header__register-link button-hover">
            Регистрация
          </Link>
          <Link to="/signin">
            <button className="header__login-button button-hover">Войти</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
