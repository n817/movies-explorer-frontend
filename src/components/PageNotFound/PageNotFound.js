// Компонент страницы 404

import './PageNotFound.css';

import { useNavigate } from 'react-router-dom';

function PageNotFound() {

  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <div className="page-not-found">
      <p className="page-not-found__code">404</p>
      <p className="page-not-found__text">Страница не найдена</p>
      <button onClick={handleClick} className="page-not-found__button button-hover">Назад</button>
    </div>
  );
}

export default PageNotFound;
