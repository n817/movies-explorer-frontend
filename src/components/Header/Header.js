// компонент, который отрисовывает шапку сайта на страницу

import './Header.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Header( {loggedIn} ) {
  const { pathname } = useLocation();

  return (
    <header className={`header ${loggedIn ? '' : 'header_landing'}`}>
      <div className="header__container">
        <img src={logo} alt="Логотип" className="header__logo"/>
        <div className="header__auth-section">
          <div>Регистрация</div>
          <div>Войти</div>
          <div>Аккаунт</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
