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
    savedMovies,
    foundMovies,
    setFoundMovies,
    renderedMovies,
    setRenderedMovies,
    findMovies,   
    saveMovie,
    deleteMovie
  }) {

  const [moviesQuantity, setMoviesQuantity] = useState(); // Количество фильмов, отображаемых на странице

  // Отображение кнопки "Ещё"
  const moreButtonClassname = `${
    foundMovies.length > moviesQuantity 
    ? "movies__more-button button-hover movies__more-button_visible" 
    : "movies__more-button button-hover"
  }`

  // Сколько карточек загружать при нажатии на кнопку "Ещё"
  function moviesQuantityStep() {
    if (window.innerWidth > 649) {
        return 7;
    } else {
        return 5;
    }
  };

  function setInitialMoviesQuantity() {
    setMoviesQuantity(moviesQuantityStep());
  }

  function handleMoreClick() {
    setMoviesQuantity(moviesQuantity + moviesQuantityStep());
  }



  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <main className="main-content">
        <SearchForm
          movies={movies}
          findMovies={findMovies}
          foundMovies={foundMovies}
          setFoundMovies={setFoundMovies}
          setInitialMoviesQuantity={setInitialMoviesQuantity}
        />
        <MoviesCardList 
          movies={foundMovies}
          savedMovies={savedMovies}
          renderedMovies={renderedMovies}
          setRenderedMovies={setRenderedMovies}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie}
          moviesQuantity={moviesQuantity}
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
