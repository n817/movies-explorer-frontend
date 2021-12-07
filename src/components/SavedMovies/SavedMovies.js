// компонент страницы с сохранёнными карточками фильмов

import './SavedMovies.css';
import Header from '../Header/Header';
import Navigation from '../Header/Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies() {
  return (
    <>
    <Header>
      <Navigation />
    </Header>

    <main className="main">
      <SearchForm />
      <MoviesCardList />
    </main>

    <Footer />
  </>
  );
}

export default SavedMovies;