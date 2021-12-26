// форма поиска, куда пользователь будет вводить запрос

import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import { useFormWithValidation } from '../../utils/Validation';

import { useState, useEffect } from 'react';

function SearchForm({ movies, findMovies, setFoundMovies, setInitialMoviesQuantity }) {

  const [ isShort, setIsShort ] = useState(false);
  const { values, handleChange } = useFormWithValidation();

  useEffect(() => {
    setFoundMovies([]);
    setInitialMoviesQuantity();
  }, [setFoundMovies]);

  function handleSubmit(e) {
    e.preventDefault();
    setInitialMoviesQuantity();
    findMovies({ movies, keyword: values.name, isShort} );
  }

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmit}>
          <fieldset className="search__input-fieldset">
            <img className="search__icon" src={ searchIcon } alt="Иконка поиска"/>
            <input
              type="text"
              name="name"
              value={values.name || ''}
              onChange={handleChange}
              className="search__input"
              placeholder="Фильм"
              autoComplete="off"
            />
            <button className="search__button button-hover">Найти</button>
          </fieldset>
          <fieldset className="search__options-fieldset">
            <label className="search__checkbox">
              <input
                type="checkbox"
                name="isShort"
                onChange={() => setIsShort(!isShort)}
                className="search__checkbox-hidden"
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
