import Promo from '../Promo/Promo.jsx';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Stage from '../Stage/Stage.jsx'

export default function Main() {
  return (
    <main>
      <Promo />
      <AboutProject />
      <Stage />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  )
}