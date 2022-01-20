// компонент, который отвечает за меню навигации на сайте

import './Navigation.css';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {

  const [popupIsOpen, setPopupIsOpen] = useState(false);

  function onClose() {
    setPopupIsOpen(false);
  }

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
      <button className="navigation__button button-hover" onClick={setPopupIsOpen}></button>
      <MobileNavigation 
        isOpen={popupIsOpen}
        onClose={onClose}
      />
    </div>
  );
}

export default Navigation;
