// компонент страницы с сохранёнными карточками фильмов

import './SavedMovies.css';
import Header from '../Header/Header';
import Navigation from '../Header/Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import { useEffect } from 'react';

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

  
  useEffect(() => {
    getSavedMovies();
  }, []);

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
      />
      <MoviesCardList 
        movies={foundMovies}
        saveMovie={saveMovie}
        deleteMovie={deleteMovie}
      />
    </main>

    <Footer />
  </>
  );
}

export default SavedMovies;