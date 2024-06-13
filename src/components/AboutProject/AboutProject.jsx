import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className='about-project'>
      <div className='about-project__content'>
        <h2 className='about-project__title title'>Что я предлагаю</h2>
        <p className='about-project__p'>Я начинающий веб-разработчик, и я хочу помогать другим людям в создании своего малого бизнеса. Я могу определить формат сайта, верстать по макету из Figma или Photoshop, или создать лаконичный современный дизайн сама. Кроме того, я могу порекомендовать дизайнеров.</p>
        <p className='about-project__p'>Я пишу понятный код без использования фреймворков. Выполняю адаптивную верстку вашего сайта и обещаю полную совместимость с популярными браузерами. Соблюдаю стандарты W3C, чтобы ваш код был валидным и надежным.</p>

        <div className='about-project__description'>
          <div>
            <h3 className='about-project__subtitle'>Многостраничный сайт</h3>
            <p className='about-project__pharagraph'>Это сайт, который состоит из нескольких страниц, каждая из которых имеет свой уникальный URL-адрес. Это позволяет создавать более сложную структуру с различными разделами и подразделами.</p>
          </div>
          <div>
            <h3 className='about-project__subtitle'>Одностраничный сайт</h3>
            <p className='about-project__pharagraph'>Под этим обычно подразумевают: лендинг, сайт визитка или портфолио. Это одностраничные сайты с краткой информацией о товаре, услуге или мероприятии.</p>
          </div>
      </div>

        <div className="about-project__time">
          <p className='about-project__back about-project__time-text'>1 неделя</p>
          <p className='about-project__front about-project__time-text'>1,5 недели</p>
          <p className='about-project__back about-project__time-text about-project__end'>Верстка</p>
          <p className='about-project__front about-project__time-text about-project__end'>Реализация</p>
        </div>
      </div>
    </section>
  )
}

// Его задача — превращать посетителей в клиентов. Пользователи переходят на лендинг по ссылкам с рекламных баннеров, постов из соцсетей, электронных писем или смс.