import './Promo.css';
import promo from "../../images/promo.jpg";

export default function Promo() {
  return (
    <section className='promo'>
      <div className='promo__content'>
        <img className='promo__img' src={promo} alt='девушка стоит в вишневом саду' />
        <div className='promo__text'>
          <h1 className='promo__title'>Алёна Никитина</h1>
          <p className='promo__pharagraph'>Вэб разработчик. Я создаю сайты для малого бизнеса.</p>
          <a className='promo__link link' href='tg://resolve?domain=alena_nikitiina' target='blank'>Заказать</a>
        </div>
      </div>
    </section>
  )
}
