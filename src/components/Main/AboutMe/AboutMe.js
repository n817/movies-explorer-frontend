// компонент с информацией о студенте

import './AboutMe.css';
import mainPhoto from '../../../images/main-photo.png';

function AboutMe() {
  return (
    <section className="about-me section-container">
      <h2 className="about-me__title section-title">Студент</h2>
      <div className="about-me__content">
        <div className="about-me__info">
          <h3 className="about-me__name">Николай</h3>
          <p className="about-me__brief">Фронтенд-разработчик, 40 лет</p>
          <p className="about-me__description">
            Работаю ведущим инженером в сфере телекоммуникаций, занимаюсь эксплуатацией сетей связи.
            Недавно решил освоить профессию веб-разработчика. Пока есть идеи как применить новые знания на текущей работе,
            а будущем возможно полностью перейду из связистов в программисты.
            Любимое занятие - путешествия. Зимой катаюсь на сноуборде.
          </p>
          <ul className="about-me__social">
            <li className="about-me__social-item">
              <a href="https://facebook.com" className="about-me__social-link button-hover" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li className="about-me__social-item">
              <a href="https://github.com" className="about-me__social-link button-hover" target="_blank" rel="noopener noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <img src={mainPhoto} alt="Фотография создателя сайта" className="about-me__photo"/>
      </div>
    </section>
  );
}

export default AboutMe;
