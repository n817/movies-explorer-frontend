// Компонент страницы 404

import {useNavigate} from 'react-router-dom';

import './PageNotFound.css';

function PageNotFound() {

  const navigate = useNavigate();

  return (
    <div className="page-not-found">
      <p className="page-not-found__code">404</p>
      <p className="page-not-found__text">Страница не найдена</p>
      <button onClick={navigate.goBack} className="page-not-found__button button-hover">Назад</button>
    </div>
  );
}

export default PageNotFound;
