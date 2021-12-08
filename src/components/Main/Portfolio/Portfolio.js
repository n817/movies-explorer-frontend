// компонент со ссылками на другие проекты

import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio landing-section-container">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a href="https://n817.github.io/how-to-learn/" className="portfolio__link button-hover" target="_blank" rel="noopener noreferrer">
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://n817.github.io/russian-travel/" className="portfolio__link button-hover" target="_blank" rel="noopener noreferrer">
            Адаптивный сайт
          </a>
          </li>
        <li className="portfolio__item">
          <a href="https://mesto.n817.ru/" className="portfolio__link button-hover" target="_blank" rel="noopener noreferrer">
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
