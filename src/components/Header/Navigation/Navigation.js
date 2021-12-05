// компонент, который отвечает за меню навигации на сайте

import './Navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';
import accountLogo from '../../../images/account-logo.svg';

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__movies-menu">
        <Link to="/movies" className="navigation__item button-hover">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="navigation__item button-hover">
          Сохранённые фильмы
        </Link>
      </div>
      <Link to="/profile" className="navigation__item navigation__item_account button-hover">
          Аккаунт
      </Link>
    </div>
  );
}

export default Navigation;
