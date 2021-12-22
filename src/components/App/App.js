// корневой компонент приложения

import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import '../../index.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import RequireAuth from '../RequireAuth/RequireAuth';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  const [allMovies, setAllMovies] = useState([]); // вся база фильмов с сервера
  const [savedMovies, setSavedMovies] = useState([]); // сохраненные фильмы
  const [filteredMovies, setFilteredMovies] = useState([]); // результаты поиска
  const [renderedMovies, setRenderedMovies] = useState([]); // фильмы, которые отображаются на странице

  // Загружаем базу фильмов с сервера
  useEffect(() => {
    moviesApi.getMoviesArray()
    .then((res) => {
      setAllMovies(res);
      console.log(`Загружено фильмов из базы: ${res.length}`);
      })
      .catch((err) => {
        console.log(`При загрузке базы фильмов с сервера ${err}`);
      });
  }, [])

  // Загружаем данные профиля пользователя
  useEffect(() => {
    mainApi.getMe()
      .then((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
        console.log(`Успешно загружены данные пользователя ${res.name}`);
        navigate('/movies');
      })
      .catch((err) => {
        console.log(`При загрузке данных пользователя ${err}`);
      });
  }, [])

  // Авторизация
  function handleSignIn({ email, password }) {
    mainApi.signIn({ email, password }) // test@test.com, ghfrnbrev123
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setLoggedIn(true);
          console.log(`Успешная авторизация пользователя ${res.name}`);
          navigate('/movies');
        }
      })
      .catch((err) => {
        console.log(`При авторизации ${err}`);
      })
  }

  // Регистрация
  function handleSignUp({ name, email, password }) {
    console.log({ name, email, password });
    mainApi.signUp({ name, email, password })
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setLoggedIn(true);
          console.log(`Успешная авторизация пользователя ${res.name}`);
          navigate('/movies');
        }
      })
      .catch((err) => {
        console.log(`При регистрации ${err}`);
      })
  }

  // Выход из учетной записи пользователя
  function handleSignOut() {
    mainApi.signOut()
      .then((res) => console.log(`Пользователь разлогинен, статус ${res.status}`))
      .catch(err => console.log(`При выходе ${err}`));
    setLoggedIn(false);
  }

  // Обновление профиля пользователя
  function handleUpdateProfile({name, email}) {
    mainApi.patchMe({name, email})
    .then((res) => {
      setCurrentUser(res);
      })
    .catch((err) => {
       console.log(`При обновлении данных пользователя ${err}`);
      })
  }

  // Поиск фильмов
  function findMovies({ movies, keyword, isShort }) {
    getSavedMovies()
    if (!keyword) {
      console.log('Введите ключевое слово!');
      return;
    }
    const filter = movies.filter((i) =>
        i.nameRU.toLowerCase().includes(keyword.toLowerCase()) 
        && (isShort ? (i.duration <= 40) : true)
    );
    if (filter.length > 0) {
      console.log(`Поиск успешно завершен, найдено фильмов: ${filter.length}`);
      setFilteredMovies(filter);
    } else {
      console.log('Ничего не найдено')
    }
  }

  // Сохранение фильма
  function saveMovie(movie) {
    console.log(currentUser);
    console.log(movie);
    mainApi.postMovie(movie)
    .then((res) => {
      console.log(res);
      console.log(`Фильм "${movie.nameRU}" сохранен`)
    })
    .catch((err) => {
      console.log(`При сохранении фильма ${err}`);
    }); 
  }
  
  // Загрузка сохраненных фильмов
  function getSavedMovies() {
    mainApi.getMovies()
    .then((res) => { 
      console.log(res);
      setSavedMovies(res);
      console.log(`Загружено сохраненных фильмов: ${res.length}`);
    })
    .catch((err) => {
      console.log(`При загрузке сохраненных фильмов ${err}`);
    });
  }

  // Удаление фильма из сохраненных
  function deleteMovie(movie) {
    mainApi.deleteMovie(movie._id)
    .then((res) => { 
      console.log(`Фильм "${res.movieData.nameRU}" (id: ${res.movieData._id}) успешно удален`);
      
    })
    .catch((err) => {
      console.log(`При удалении фильма ${err}`);
    });
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>

          <Route
            path="/"
            element={<Main />}
          />

          <Route
            path="signin"
            element={
              <Login onLogin={handleSignIn}/>
            }
          />

          <Route
            path="signup"
            element={
              <Register onRegister={handleSignUp}/>
            }
          />

          <Route
            path="profile"
            element={
              <RequireAuth loggedIn={loggedIn}>
                <Profile
                  onSignOut={handleSignOut}
                  onUpdate={handleUpdateProfile}
                />
              </RequireAuth>
            }
          />

          <Route
            path="movies"
            element={
              <RequireAuth loggedIn={loggedIn}>
                <Movies
                  allMovies={allMovies}
                  renderedMovies={filteredMovies}
                  findMovies={findMovies}
                  saveMovie={saveMovie}
                  deleteMovie={deleteMovie}
                />
              </RequireAuth>
            }
          />

          <Route
            path="saved-movies"
            element={
              <RequireAuth loggedIn={loggedIn}>
                <SavedMovies
                  savedMovies={savedMovies}
                  renderedMovies={filteredMovies}
                  findMovies={findMovies}
                  saveMovie={saveMovie}
                  deleteMovie={deleteMovie}
                />
              </RequireAuth>
            }
          />

          <Route
            path="*"
            element={<PageNotFound />}
          />

        </Routes>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
