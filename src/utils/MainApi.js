// Запросы к API авторизации

import { mainApiSettings, moviesApiSettings } from "./constants";

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // Проверка ответа сервера
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`произошла ошибка: ${res.status}`);
  }

  // Авторизация
  signIn({ email, password }) {
    return fetch(
      `${this._baseUrl}/signin`,
      {
        method: 'POST',
        credentials: 'include',
        headers: this._headers,
        body: JSON.stringify({password, email})
      }
    )
    .then(this._checkResponse);
  }

  // Регистрация
  signUp({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`,
      {
        method: 'POST',
        credentials: 'include',
        headers: this._headers,
        body: JSON.stringify({ name, email, password })
      }
    )
    .then(this._checkResponse);
  }

  // Выход из профиля
  signOut() {
    return fetch(
      `${this._baseUrl}/signout`,
      {
        method: 'POST',
        credentials: 'include',
      })
    .then((res) => {
      if (res.ok) {
        return res;
      }
      return Promise.reject(`произошла ошибка: ${res.status}`);
    }
    );
  }

  // Получение информации о пользователе с сервера
  getMe() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include', // теперь куки посылаются вместе с запросом
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  // Загрузка новой информации о пользователе на сервер
  patchMe({name, email}) {
    return fetch(`${this._baseUrl}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: this._headers,
    body: JSON.stringify({ name, email })
    })
    .then(this._checkResponse)
  }

  // Получение массива сохраненных фильмов с сервера
  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  // Сохранение нового фильма на сервер
  postMovie(movie) {
    const {country, director, duration, year, description, nameRU, nameEN} = movie;

    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: `${moviesApiSettings.baseUrl}${movie.image.url}`,
        trailer: movie.trailerLink,
        thumbnail: `${moviesApiSettings.baseUrl}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU,
        nameEN
        })
    })
    .then(this._checkResponse)
  }

  // Удаление фильма с сервера
  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers
    })
    .then(this._checkResponse)
  }

}


// Создаем экземпляр класса взаимодействия с API сервера
const mainApi = new MainApi(mainApiSettings);


export default mainApi;

