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
    deleteMovie,
    notFound,
    setNotFound
  }) {

  const [moviesQuantity, setMoviesQuantity] = useState();  // Количество фильмов, отображаемых на странице
  const [isShortSavedMovies, setIsShortSavedMovies] = useState(false); // состояние переключателя короткометражек
  const [keywordSavedMovies, setKeywordSavedMovies] = useState(''); // текст запроса
  
  // Отображаем все сохраненные фильмы при загрузке страницы
  useEffect(() => {
    setFoundMovies(savedMovies);
    setNotFound(false);
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
        isShort={isShortSavedMovies}
        setIsShort={setIsShortSavedMovies}
        keyword={keywordSavedMovies}
        setKeyword={setKeywordSavedMovies}
      />
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
    </main>

    <Footer />
  </>
  );
}

export default SavedMovies;