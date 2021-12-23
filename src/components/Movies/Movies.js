// компонент страницы с поиском по фильмам

import './Movies.css';
import Header from '../Header/Header';
import Navigation from '../Header/Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ allMovies, filteredMovies, findMovies, saveMovie, deleteMovie, isLoading }) {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <main className="main-content">
        <SearchForm
          movies={allMovies}
          findMovies={findMovies}
        />
        <MoviesCardList 
          movies={filteredMovies}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie}
        />
        <button className="movies__more-button button-hover">Ещё</button>
      </main>

      <Footer />
    </>
  );
}

export default Movies;
