import './Techs.css';

export default function Techs() {
  return (
    <section className='techs'>
      <div className='techs__content'>
        <h2 className='techs__title title'>Технологии</h2>
        <h3 className='techs__subtitle'>7 технологий</h3>
        <p className='techs__paragraph'>На курсе веб-разработки я освоилa технологии, которые применяю теперь в своих проектах.</p>
        <ul className='techs__list'>
          <li className='techs__item'>HTML5</li>
          <li className='techs__item'>CSS</li>
          <li className='techs__item'>JS</li>
          <li className='techs__item'>React</li>
          <li className='techs__item'>Git</li>
          <li className='techs__item'>Express.js</li>
          <li className='techs__item'>mongoDB</li>
        </ul>
      </div>
    </section>
  )
}
