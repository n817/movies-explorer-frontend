// компонент, который отрисовывает шапку сайта на страницу

import './Header.css';
import logo from '../../images/logo.svg';

import { Link } from 'react-router-dom';

function Header( {children, isLandingPage} ) {

  return (
    <header className={`header ${isLandingPage ? 'header_landing' : ''}`}>
      <div className="header__container">
        <Link to="/" className="header__logo button-hover">
          <img src={logo} alt="Логотип"/>
        </Link>
        {children}
      </div>
    </header>
  );
}

export default Header;
