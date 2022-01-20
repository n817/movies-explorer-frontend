// компонент страницы изменения профиля

import './Profile.css';
import Header from '../Header/Header';
import Navigation from '../Header/Navigation/Navigation';
import validator from 'validator';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/Validation';

import { useContext, useState, useEffect, useCallback } from 'react';

function Profile({ onSignOut, onUpdate, messageToUser, setMessageToUser }) {

  const { name, email } = useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();
  const [currentValues, setCurrentValues] = useState({}); // текущие значения профиля

  // Сохранение текущих данных профиля в currentValues
  useEffect(() => {
    resetForm({ name, email });
    setCurrentValues({ name, email });
  }, [name, email])

  // Проверяем, изменились ли данные профиля
  const isDataChanged = useCallback(() => {
    return JSON.stringify(currentValues) !== JSON.stringify(values)
  }, [currentValues, values])

  // Проверка корректности ввода имени
  const validateName = (e) => {
    setMessageToUser('');
    handleChange(e);
  }

  // Проверка корректности ввода e-mail
  const validateEmail = (e) => {
    setMessageToUser('');
    const email = e.target.value;
    if (validator.isEmail(email)) {
      e.target.setCustomValidity('');
    } else {
      e.target.setCustomValidity('Введите корректный e-mail');
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
              minLength="2"
              maxLength="30"
              onChange={(e) => validateName(e)}
              className="profile__form-input"
              placeholder="Введите имя"
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
              placeholder="Введите e-mail"
              required
            />
            <span className="profile-form__error profile-form__error_email">{errors.email}</span>
          </label>
        </form>
        <div className="profile__options">
          <button
            type="submit"
            onClick={() => onUpdate(values)}
            className={`profile__button button-hover ${isValid && isDataChanged() ? '' : "profile__button_disabled"}`}
          >
            Сохранить
          </button>
          
          <button 
            onClick={onSignOut}
            className="profile__button button-hover"
          >
            Выйти из аккаунта
          </button>
          <span className="profile__message">{messageToUser}</span>
        </div>
      </main>
    </>
  );
}

export default Profile;
