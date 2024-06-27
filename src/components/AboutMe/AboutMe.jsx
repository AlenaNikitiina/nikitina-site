import './AboutMe.css';
import me from "../../images/me.jpg";

export default function AboutMe() {
  return(
    <section className='about-me'>
      <div className='about-me__content'>
        <h2 className='about-me__title title'>Обо мне</h2>
        <div className='about-me__w'>
          <div className='about-me__info'>
            <h3 className='about-me__name'>Алёна</h3>
            <p className='about-me__profession'>Junior Full-stack web developer</p>
            <p className='about-me__text'>Я родилась в Московской области. Закончила Первый Московский государственный медицинский университет им. И. М. Сеченова и несколько лет работала врачом анестезиологом-реаниматологом. После решила эммигрировать и поняла, что мне нужна профессия, в которой я не буду привязанной к месту. Тем более ранее параллельно с основной раюотой я пробовала профессии связанные с дизайном и программированием. Теперь полностью посвящаю себя web разработке. В данный момент завершила один коммерческий сайт и приступаю к следующему. Могу и вам создать!</p>
            <a className='about-me__link link' href='https://github.com/AlenaNikitiina' target='blank'>Github</a>
          </div>
          <img className='about-me__photo' src={me} alt='фото Алены' />
        </div>
      </div>
      
    </section>
  )
}