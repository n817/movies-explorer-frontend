// компонент, который отвечает за мобильный вид меню навигации на сайте

import './MobileNavigation.css';
import React from 'react';
import { Link } from 'react-router-dom';

function MobileNavigation({ isOpen, onClose }) {

  return (
    <div className={`mobile-navigation ${isOpen ? "mobile-navigation_opened" : ""}`}>
      <div className="mobile-navigation__content">
        <div className="mobile-navigation__menu">
          <Link to="/" className="mobile-navigation__item button-hover">
            Главная
          </Link>
          <Link to="/movies" className="mobile-navigation__item button-hover">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="mobile-navigation__item button-hover">
            Сохранённые фильмы
          </Link>
        </div>
        <Link to="/profile" className="mobile-navigation__account button-hover">
          Аккаунт
        </Link>
      </div>
      <button className="mobile-navigation__close-button button-hover" onClick={onClose}></button>
    </div>
  );
}

export default MobileNavigation;
