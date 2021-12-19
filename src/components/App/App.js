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
import { movies, savedMovies } from '../../utils/constants';
import RequireAuth from '../RequireAuth/RequireAuth';
import mainApi from '../../utils/MainApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  // Загрузка данных профиля пользователя
  useEffect(() => {
    mainApi.getMe()
      .then((res) => {
        console.log(`Успешно загружены данные пользователя ${res.name}`);
        setCurrentUser(res);
        setLoggedIn(true);
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
          console.log(`Успешная авторизация пользователя ${res.name}`);
          setCurrentUser(res);
          setLoggedIn(true);
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
          console.log(`Успешная регистрация пользователя ${res.name}`);
          setCurrentUser(res);
          setLoggedIn(true);
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
                <Movies movies={movies} />
              </RequireAuth>
            }
          />

          <Route
            path="saved-movies"
            element={
              <RequireAuth loggedIn={loggedIn}>
                <SavedMovies savedMovies={savedMovies} />
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
