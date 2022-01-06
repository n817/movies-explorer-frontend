// форма поиска, куда пользователь будет вводить запрос

import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';

import { useEffect } from 'react';

function SearchForm(
  { 
    movies,
    foundMovies,
    findMovies,
    setFoundMovies,
    setInitialMoviesQuantity,
    isShort,
    setIsShort,
    keyword,
    setKeyword
  }) {

  // Устанавливаем исходное количество отображаемых карточек при загрузке страницы
  useEffect(() => {
    setInitialMoviesQuantity();
  }, []);

  // Фильтр короткометражек в результатах поиска
  useEffect(() => {
    if (foundMovies.length > 0) {
      findMovies({ movies, keyword, isShort });
    } else {
      console.log('Нечего фильтровать')
    }
  }, [isShort]);

  function handleSubmit(e) {
    e.preventDefault();
    setFoundMovies([]);
    setInitialMoviesQuantity();
    findMovies({ movies, keyword, isShort });
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
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
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
                checked={isShort}
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
