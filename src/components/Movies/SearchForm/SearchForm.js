// форма поиска, куда пользователь будет вводить запрос

import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form">
          <img className="search-form__img" src={img} alt="Иконка поиска"/>
          <label className="form__field">
            <input
              className="form__input form__input_dark-theme"
              name="email"
              placeholder="Email"
              minLength="5"
              maxLength="30"
              autoComplete="off"
              required
            />
           </label>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
