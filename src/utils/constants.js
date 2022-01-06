const mainApiSettings = {
  baseUrl: 'https://api.movies.n817.ru',
  headers: {
    'Content-Type': 'application/json'
  },
};

const moviesApiSettings = {
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json'
  },
};

const SHORTFILM_DURATION = 40;
const MOBILE_RESOLUTION = 649;
const CARDS_QUANTITY = 7;
const CARDS_QUANTITY_MOBILE = 5;

export { 
  mainApiSettings,
  moviesApiSettings,
  SHORTFILM_DURATION,
  MOBILE_RESOLUTION,
  CARDS_QUANTITY,
  CARDS_QUANTITY_MOBILE
};
