// компонент страницы изменения профиля

import './Profile.css';
import Header from '../Header/Header';
import Navigation from '../Header/Navigation/Navigation';

function Profile() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <main className="profile main-content">
        <form className="profile__form">
          <h2 className="profile__title">Привет, Николай</h2>
          <label className="profile__form-label">Имя
            <input className="profile__form-input" placeholder="введите имя" defaultValue="Николай" />
          </label>
          <label className="profile__form-label">E-mail
            <input className="profile__form-input" placeholder="введите e-mail" defaultValue="pochta@yandex.ru"/>
          </label>
        </form>
        <div className="profile__options">
          <button className="profile__button button-hover">Редактировать</button>
          <button className="profile__button button-hover">Выйти из аккаунта</button>
        </div>
      </main>
    </>
  );
}

export default Profile;
