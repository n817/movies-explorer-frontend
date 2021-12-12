// форма поиска, куда пользователь будет вводить запрос

import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg'

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <fieldset className="search__input-fieldset">
            <img className="search__icon" src={ searchIcon } alt="Иконка поиска"/>
            <input
              className="search__input"
              name="film"
              placeholder="Фильм"
              autoComplete="off"
            />
            <button className="search__button button-hover">Найти</button>
          </fieldset>
          <fieldset className="search__options-fieldset">
            <label className="search__checkbox">
              <input
                className="search__checkbox-hidden"
                name="short"
                type="checkbox"
              />
              <span className="search__checkbox-visible"></span>
            </label>
            <span className="search__options-text">Короткометражки</span>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
