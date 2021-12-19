// компонент страницы изменения профиля

import './Profile.css';
import Header from '../Header/Header';
import Navigation from '../Header/Navigation/Navigation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/Validation';

import { useContext } from 'react';

function Profile({ onSignOut, onUpdate }) {

  const { name, email } = useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <main className="profile main-content">
        <form className="profile__form">
          <h2 className="profile__title">Привет, {name}</h2>
          <label className="profile__form-label">Имя
            <input
              type="text"
              name="name"
              value={values.name || ''}
              onChange={handleChange}
              className="profile__form-input"
              placeholder="введите имя"
            />
          </label>
          <label className="profile__form-label">E-mail
            <input
              type="email"
              name="email"
              value={values.email || ''}
              onChange={handleChange}
              className="profile__form-input"
              placeholder="введите e-mail"
            />
          </label>
        </form>
        <div className="profile__options">
          <button
            onClick={() => onUpdate(values)}
            className="profile__button button-hover"
          >Редактировать
          </button>
          <button onClick={onSignOut} className="profile__button button-hover">Выйти из аккаунта</button>
        </div>
      </main>
    </>
  );
}

export default Profile;
