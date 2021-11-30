// компонент с навигацией по странице «О проекте»

import './NavTab.css';

function NavTab() {
  return (
    <section className="navtab">
      <div className="navtab__container section-container">
      <a href="#about-project" target="_self">
        <button className="navtab__button button-hover">Узнать больше</button>
      </a>
      </div>
    </section>
  );
}

export default NavTab;
