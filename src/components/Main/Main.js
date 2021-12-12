// компонент страницы «О проекте»
// он будет содержать только презентационные компоненты и в будущем, за исключением шапки навигации

import './Main.css';
import Header from '../Header/Header';
import AuthMenu from '../Header/AuthMenu/AuthMenu';
import Footer from '../Footer/Footer';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';

function Main() {
  return (
    <>
      <Header isLandingPage='true'>
        <AuthMenu />
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
