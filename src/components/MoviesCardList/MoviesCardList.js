// компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

import { useState, useEffect } from 'react';

function MoviesCardList(
  {
    movies,
    savedMovies,
    renderedMovies,
    setRenderedMovies,
    saveMovie,
    deleteMovie,
    moviesQuantity
  }) {

  // Загружаем по 7 карточек
  useEffect(() => {
    setRenderedMovies(movies.slice(0, moviesQuantity));
  }, [movies, moviesQuantity]);

  return (
    <ul className="movies-card-list">
      {renderedMovies.map((movie) => 
        <MoviesCard
          key={movie.id}
          movie={movie}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie}
          savedMovies={savedMovies}
        />
      )}
    </ul>
  );
}

export default MoviesCardList;
