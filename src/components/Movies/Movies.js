// компонент страницы с поиском по фильмам

import './Movies.css';
import Header from '../Header/Header';
import Navigation from '../Header/Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import { useState } from 'react';

function Movies(
  { 
    movies,
    foundMovies,
    findMovies,
    setFoundMovies,
    saveMovie,
    deleteMovie
  }) {

  const [moviesQuantity, setMoviesQuantity] = useState();

  const moreButtonClassname = `${
    foundMovies.length > moviesQuantity 
    ? "movies__more-button button-hover movies__more-button_visible" 
    : "movies__more-button button-hover"
  }`

  function setInitialMoviesQuantity() {
    setMoviesQuantity(moviesQuantityStep());
  }

  function handleMoreClick() {
    setMoviesQuantity(moviesQuantity + moviesQuantityStep());
  }

  function moviesQuantityStep() {
    if (window.innerWidth > 649) {
        return 7;
    } else {
        return 5;
    }
  };

  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <main className="main-content">
        <SearchForm
          movies={movies}
          findMovies={findMovies}
          setFoundMovies={setFoundMovies}
          setInitialMoviesQuantity={setInitialMoviesQuantity}
        />
        <MoviesCardList 
          movies={foundMovies}
          moviesQuantity={moviesQuantity}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie}
        />
        <button
          className={moreButtonClassname}
          onClick={handleMoreClick}
        >
          Ещё
        </button>
      </main>

      <Footer />
    </>
  );
}

export default Movies;
