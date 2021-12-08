// компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {
  return (
    <ul className="movies-card-list">
      {movies.map((movie) => 
        <MoviesCard
          key={movie.id}
          movie={movie}
        />
      )}
    </ul>
  );
}

export default MoviesCardList;
