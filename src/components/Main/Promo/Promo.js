// компонент с вёрсткой баннера страницы «О проекте»

import './Promo.css';
import promoLogo from '../../../images/promo-logo.png'

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container section-container">
        <div className="promo__content">
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img src={promoLogo} alt="Логотип" className="promo__logo"/>
      </div>
    </section>
  );
}

export default Promo;
