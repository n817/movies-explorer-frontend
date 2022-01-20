// компонент формы идентификации

import './IdentityForm.css';
import logo from '../../images/logo.svg';

import { Link } from 'react-router-dom';

function IdentityForm({
  title,
  submitButtonText,
  navigationText,
  link,
  linkText,
  onFormSubmit,
  isValid,
  children
  }) {

  function handleSubmit(evt) {
    evt.preventDefault();
    onFormSubmit();
  };

  return (
    <main className="identity-form">
      <div className="identity-form__container">
        <Link to="/" className="identity-form__logo button-hover">
          <img src={logo} alt="Логотип"/>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="identity-form__form"
        >
          <h2 className="identity-form__title">{title}</h2>
          { children }
          <button
            type="submit"
            disabled={!isValid}
            className={`identity-form__submit-button button-hover ${isValid ? "" : "identity-form__submit-button_disabled"}`}
          >
            {submitButtonText}
          </button>
          <p className="identity-form__navigation">{navigationText}
            <Link to={link} className="identity-form__link button-hover">{linkText}</Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default IdentityForm;
