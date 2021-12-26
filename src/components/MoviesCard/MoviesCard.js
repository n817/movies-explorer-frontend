// компонент одной карточки фильма

import './MoviesCard.css';
import { convertDuration } from '../../utils/utils';
import { moviesApiSettings } from '../../utils/constants';

import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie, saveMovie, deleteMovie }) {

  const {duration, image, trailerLink, nameRU} = movie;
  const { pathname } = useLocation();
  const [cardLike, setCardLike] = useState(false);
  const cardLikeButtonClassName = (`card__like-button button-hover ${cardLike ? 'card__like-button_active' : ''}`);

  function onCardLike() {
    setCardLike(!cardLike);
    if (!cardLike) {
      saveMovie(movie);
    } 
    else {
      deleteMovie(movie);
    }
  }

  function onCardDelete() {
    deleteMovie(movie);
  }

  return (
    <li className="card">
      <div className="card__description">
        <div className="card__info">
          <h2 className="card__name">{nameRU}</h2>
          <span className="card__duration">{convertDuration(duration)}</span>
        </div>
        {
          pathname === '/saved-movies'
          ?
            <button
              className="card__like-button button-hover card__like-button_delete"
              onClick={onCardDelete}
            >
            </button>
          :
            <button 
              className={cardLikeButtonClassName}
              onClick={onCardLike}
            >
            </button>
        }
      </div>
      <a href={trailerLink} target="_blank" rel="noopener noreferrer" className="card__link">
        <img
          className="card__image"
          src={
                pathname === '/saved-movies'
                ? image
                : `${moviesApiSettings.baseUrl}${image.url}`
              }
          alt="Постер к фильму"/>
      </a>
    </li>
  );
}

export default MoviesCard;
