// компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

import { useState } from 'react';

function MoviesCardList({ movies, saveMovie, deleteMovie }) {

  const [renderedMovies, setRenderedMovies] = useState([]); // фильмы, отображаемые на странице

  return (
    <ul className="movies-card-list">
      {movies.map((movie) => 
        <MoviesCard
          key={movie.id}
          movie={movie}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie}
        />
      )}
    </ul>
  );
}

export default MoviesCardList;
