import '../Stage/Stage.css';

export default function Stage() {
  return (
    <section className='stage'>
      <div className='stage__content'>
        <h2 className='about-project__title title'>Этапы работы</h2>

        <ul className='stage__list'>
          <li className='stage__item'>
            <h2 className='stage__subtitle'>(1)&nbsp;Знакомство</h2>
            <p className='stage__paragraph'>Я попрошу вас заполнить короткий бриф с вопросами. Это поможет более четко определить, что вы хотите получить в результате, и облегчит мне задачу построения диалога. Чтобы убедиться в реальности человека я предлагаю созвон в зуме.</p>
          </li>
          <li className='stage__item'>
            <h2 className='stage__subtitle'>(2)&nbsp;Состовление плана сайта</h2>
            <p className='stage__paragraph'>Через несколько дней я предоставлю вам компьютерную версию сайта с примерным текстом и фотографиями для вашего согласования. Предварительная оплата составляет 30%.</p>
          </li>
          <li className='stage__item'>
            <h2 className='stage__subtitle'>(3)&nbsp;Основная работа</h2>
            <p className='stage__paragraph'>После приступаю к верстке версии для мобильного телефона и промежуточных. Если у вас нет доменного имени, то я могу его зарегистрировать.</p>
          </li>
          <li className='stage__item'>
            <h2 className='stage__subtitle'>(4)&nbsp;Внесение правок</h2>
            <p className='stage__paragraph'>После просмотра вы сможете изменить порядок расположения блоков, их цвет или текст.</p>
          </li>
          <li className='stage__item'>
            <h2 className='stage__subtitle'>(5)&nbsp;Что требуется от вас?</h2>
            <p className='stage__paragraph'>Контент. Текстовой: Полный текст, который должен быть размещен на веб-сайте. Логотипы, фотографии, видеоролики, иллюстрации и другие графические элементы, предназначенные для публикации. И ответ на мои вопросы в течении двух суток.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
