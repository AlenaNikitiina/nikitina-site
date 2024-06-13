import './Portfolio.css';

export default function Portfolio() {
  return(
    <section id='portfolio' className='portfolio'>
      <div className='portfolio__content'>
        <h4 className='portfolio__title'>Портфолио</h4>
        <div class="text-container">
            <span>П</span>
            <span>о</span>
            <span>р</span>
            <span>т</span>
            <span>ф</span>
            <span>о</span>
            <span>л</span>
            <span>и</span>
            <span>о</span>
          </div>
        <ul className='portfolio__list'>
          
          <li>
            <a className='portfolio__item link' href='https://alenanikitiina.github.io/movies-explorer-frontend/index.html' target='blank'>
            Приложение для поиска и просмотра фильмов
              <span className='portfolio__span'>↗</span></a>
          </li>
          <li>
            <a className='portfolio__item link' href='https://alenanikitiina.github.io/russian-travel/' target='blank'>
              Лэндинг "Путешествие по Росиии"
              <span className='portfolio__span'>↗</span></a>
          </li>
          <li>
            <a className='portfolio__item link' href='https://github.com/AlenaNikitiina/react-mesto-api-full-gha' target='blank'>
              Место
              <span className='portfolio__span'>↗</span></a>
          </li>
          <li>
            <a className='portfolio__item link' href='https://litueva-mentor.ru' target='blank'>
              Личный сайт врача нутрициолога
              <span className='portfolio__span'>↗</span></a>
          </li>
      </ul>
      </div>
    </section>
  )
}
