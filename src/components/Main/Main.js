// компонент страницы «О проекте»
// он будет содержать только презентационные компоненты, за исключением шапки навигации

import './Main.css';
import Header from '../Header/Header';
import AuthMenu from '../Header/AuthMenu/AuthMenu';
import Navigation from '../Header/Navigation/Navigation';
import Footer from '../Footer/Footer';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';

function Main({ loggedIn }) {
  return (
    <>
      <Header isLandingPage='true'>
        {loggedIn ? <Navigation /> : <AuthMenu />}
      </Header>

      <main className="main">
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>

      <Footer />
    </>
  );
}

export default Main;
