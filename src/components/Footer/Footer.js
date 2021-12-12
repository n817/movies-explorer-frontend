// презентационный компонент, который отрисовывает подвал

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__items">
          <li className="footer__item">
            <a href="https://practicum.yandex.ru" className="footer__item-link button-hover" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
          </li>
          <li className="footer__item">
            <a href="https://github.com/n817" className="footer__item-link button-hover" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
          <li className="footer__item">
            <a href="https://www.facebook.com/nikolai.gavriushin" className="footer__item-link button-hover" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
