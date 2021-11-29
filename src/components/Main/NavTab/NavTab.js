// компонент с навигацией по странице «О проекте»

import './NavTab.css';
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <section className="navtab">
      <div className="navtab__container section-container">
        <Link to="#">
          <button className="navtab__button button-hover">Узнать больше</button>
        </Link>
      </div>
    </section>
  );
}

export default NavTab;
