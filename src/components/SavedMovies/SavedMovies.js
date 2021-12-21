// компонент страницы с сохранёнными карточками фильмов

import './SavedMovies.css';
import Header from '../Header/Header';
import Navigation from '../Header/Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ savedMovies, renderedMovies, findMovies, saveMovie, deleteMovie }) {
  return (
    <>
    <Header>
      <Navigation />
    </Header>

    <main className="main-content saved-movies">
      <SearchForm 
        movies={savedMovies}
        findMovies={findMovies}
      />
      <MoviesCardList 
        movies={renderedMovies}
        saveMovie={saveMovie}
        deleteMovie={deleteMovie}
      />
    </main>

    <Footer />
  </>
  );
}

export default SavedMovies;