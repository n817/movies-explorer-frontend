// компонент страницы с сохранёнными карточками фильмов

import './SavedMovies.css';
import Header from '../Header/Header';
import Navigation from '../Header/Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import { useState, useEffect } from 'react';

function SavedMovies(
  { 
    savedMovies,
    foundMovies,
    setFoundMovies,
    renderedMovies,
    setRenderedMovies,
    findMovies,   
    saveMovie,
    deleteMovie
  }) {

  const [moviesQuantity, setMoviesQuantity] = useState();  // Количество фильмов, отображаемых на странице

  
  // Отображаем все сохраненные фильмы при загрузке страницы
  useEffect(() => {
    setFoundMovies(savedMovies)
  }, []);

  function setInitialMoviesQuantity() {
    setMoviesQuantity(savedMovies.length);
  }

  return (
    <>
    <Header>
      <Navigation />
    </Header>

    <main className="main-content saved-movies">
      <SearchForm 
        movies={savedMovies}
        foundMovies={foundMovies}
        findMovies={findMovies}
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
    </main>

    <Footer />
  </>
  );
}

export default SavedMovies;