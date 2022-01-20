// компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

import { useEffect } from 'react';

function MoviesCardList(
  {
    movies,
    savedMovies,
    renderedMovies,
    setRenderedMovies,
    saveMovie,
    deleteMovie,
    moviesQuantity,
    notFound
  }) {
  
  const notFoundClassname = notFound 
    ? "movies-card-list__not-found movies-card-list__not-found_visible"
    : "movies-card-list__not-found";

  // Если фильмы найдены, то загружаем по 7 карточек
  useEffect(() => {
    notFound ? setRenderedMovies([]) : setRenderedMovies(movies.slice(0, moviesQuantity));
  }, [movies, moviesQuantity, notFound]);

  return (
    <ul className="movies-card-list">
      <p className={notFoundClassname}>Ничего не найдено</p>
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
