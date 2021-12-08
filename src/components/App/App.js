// корневой компонент приложения

import './App.css';
import React from 'react';
// import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import '../../index.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import { movies, savedMovies } from '../../utils/constants';

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Routes>

        <Route
          path="/"
          element={<Main />}
        />

        <Route
          path="movies"
          element={
            <Movies 
              movies={movies}
            />
          }
        />

        <Route
          path="saved-movies"
          element={
            <SavedMovies 
              savedMovies={savedMovies}
            />}
        />

        <Route
          path="profile"
          element={<Profile />}
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
    </>
  );
}

export default App;
