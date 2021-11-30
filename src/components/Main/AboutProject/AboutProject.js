// компонент с описанием дипломного проекта

import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project section-container" id="about-project">
      <h2 className="about-project__title section-title">О проекте</h2>
      <div className="about-project__content">
        <div className="about-project__content-item">
          <h3 className="about-project__content-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__content-text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__content-item">
          <h3 className="about-project__content-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__content-text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__progress">
          <div className="about-project__progress-bar">1 неделя</div>
          <div className="about-project__progress-bar">4 недели</div>
          <div className="about-project__progress-text">Back-end</div>
          <div className="about-project__progress-text">Front-end</div>
      </div>
    </section>
  );
}

export default AboutProject;
