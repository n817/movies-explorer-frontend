// компонент страницы с поиском по фильмам

import './Movies.css';
import Header from '../Header/Header';
import Navigation from '../Header/Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { MOBILE_RESOLUTION, CARDS_QUANTITY, CARDS_QUANTITY_MOBILE } from '../../utils/constants';

import { useState, useEffect } from 'react';

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
    deleteMovie,
    isLoading,
    notFound,
    setNotFound,
    isShort,
    setIsShort,
    keyword,
    setKeyword
  }) {

  const [moviesQuantity, setMoviesQuantity] = useState(); // Количество фильмов, отображаемых на странице

  // Отображение кнопки "Ещё"
  const moreButtonClassname = `${
    foundMovies.length > moviesQuantity 
    ? "movies__more-button button-hover movies__more-button_visible" 
    : "movies__more-button button-hover"
  }`

  // Устанавливаем исходное состояние notFound при загрузке страницы
  useEffect(() => {
    setNotFound(false);
  }, []);

  // Сколько карточек загружать при нажатии на кнопку "Ещё"
  function moviesQuantityStep() {
    if (window.innerWidth > MOBILE_RESOLUTION) {
        return CARDS_QUANTITY;
    } else {
        return CARDS_QUANTITY_MOBILE;
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
          isShort={isShort}
          setIsShort={setIsShort}
          keyword={keyword}
          setKeyword={setKeyword}
        />

        {isLoading && <Preloader/>}
        
        <MoviesCardList 
          movies={foundMovies}
          savedMovies={savedMovies}
          renderedMovies={renderedMovies}
          setRenderedMovies={setRenderedMovies}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie}
          moviesQuantity={moviesQuantity}
          notFound={notFound}
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
