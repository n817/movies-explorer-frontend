// компонент страницы изменения профиля

import './Profile.css';
import Header from '../Header/Header';
import Navigation from '../Header/Navigation/Navigation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/Validation';
import { useState, useContext } from 'react';
import validator from 'validator';

function Profile({ onSignOut, onUpdate }) {

  const { name, email } = useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  // Проверка корректности ввода e-mail
  const [emailError, setEmailError] = useState('');
  const validateEmail = (e) => {
    const email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('Введите корректный e-mail!');
    }
    handleChange(e);
  }

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
              required
            />
            <span className="profile-form__error">{errors.name}</span>
          </label>
          <label className="profile__form-label">E-mail
            <input
              type="email"
              name="email"
              value={values.email || ''}
              onChange={(e) => validateEmail(e)}
              className="profile__form-input"
              placeholder="введите e-mail"
              required
            />
            <span className="profile-form__error profile-form__error_email">{emailError}</span>
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
