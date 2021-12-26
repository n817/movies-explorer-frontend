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
    movies,
    foundMovies,
    findMovies,
    setFoundMovies,
    saveMovie,
    deleteMovie,
    getSavedMovies
  }) {

  const [moviesQuantity, setMoviesQuantity] = useState();  // Количество фильмов, отображаемых на странице

  
  // Загружаем базу сохраненных фильмов
  useEffect(() => {
    getSavedMovies();
  }, []);

  function setInitialMoviesQuantity() {
    setMoviesQuantity(movies.length);
  }

  return (
    <>
    <Header>
      <Navigation />
    </Header>

    <main className="main-content saved-movies">
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
        savedMovies={movies}
      />
    </main>

    <Footer />
  </>
  );
}

export default SavedMovies;