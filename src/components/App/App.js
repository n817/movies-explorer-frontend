// корневой компонент приложения

import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

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

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>

          <Route
            path="/"
            element={<Main />}
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
            path="profile"
            element={
              <RequireAuth loggedIn={loggedIn}>
                <Profile />
              </RequireAuth>
            }
          />

          <Route
            path="signin"
            element={<Login />}
          />

          <Route
            path="signup"
            element={<Register />}
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
