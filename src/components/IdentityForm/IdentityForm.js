// компонент формы идентификации

import './IdentityForm.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function IdentityForm( {title, submitButtonText, navigationText, link, linkText, onFormSubmit, children} ) {

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
          <button className="identity-form__submit-button">{submitButtonText}</button>
          <p className="identity-form__navigation">{navigationText}
            <Link to={link} className="identity-form__link button-hover">{linkText}</Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default IdentityForm;
