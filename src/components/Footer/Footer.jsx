import './Footer.css';
//import telegram from "../../images/telegram.svg";

export default function Footer() {
  return (
    <footer className='footer'>
      <section className='footer__content'>
        <p className='footer__sign'>Разработка сайтов</p>
        
        <div className='f'>
        <div class="text-container">
            <span>Р</span>
            <span>а</span>
            <span>з</span>
            <span>р</span>
            <span>а</span>
            <span>б</span>
            <span>о</span>

            <span>т</span>
            <span>к</span>
            <span>а</span>
            <span> </span>
            <span>с</span>
            <span>а</span>
            <span>й</span>
            <span>т</span>
            <span>о</span>
            <span>в</span>
          </div>
          </div>

        <nav className='footer__text'>
          <p className='footer__copyright'>© {(new Date()).getFullYear()}</p>
          <ul className='footer__list'>
            <li>
              <a className='footer__link link' href='https://github.com/AlenaNikitiina' alt="Github" target='blank'>Github</a>
            </li>
            <li>
              <a className='footer__link link' href='tg://resolve?domain=alena_nikitiina' target='blank' alt="Телеграм">Telegram</a>
            </li>
            <li>
              <a className='footer__link link' href='https://wa.me/+79104745657' target='blank' alt="WhatsApp">WhatsApp</a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  )
}