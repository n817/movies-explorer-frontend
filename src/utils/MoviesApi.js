// Запросы к сервису beatfilm-movies

import { moviesApiSettings } from "./constants";

class MoviesApi {
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

  // Получение массива фильмов с сервера
  getMoviesArray() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkResponse)
  }

}


// Создаем экземпляр класса взаимодействия с API сервера
const moviesApi = new MoviesApi(moviesApiSettings);


export default moviesApi;
