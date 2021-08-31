

import classes from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faEyeSlash, faTwitter } from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
   
    <div className = {classes.footer}>
    <div className = {classes.footer_container}>
      <div className = {classes.footer_shops}>
      <h4>В наших магазинах</h4>
        <ul>
          <li><a href = '#'>Адреса магазинов</a></li>
          <li><a href = '#'>Услуги</a></li>
          <li><a href = '#'>Наши партнеры</a></li>
          <li><a href = '#'>О компании</a></li>
          <li><a href = '#'>Хотите у нас работать?</a></li>
        </ul>
      </div>
      <div className = {classes.footer_i_shops}>
      <h4>В наших магазинах</h4>
     
        <ul>
          <li><a href = '#'>Доставка и оплата</a></li>
          <li><a href = '#'>Акции</a></li>
          <li><a href = '#'>Книги</a></li>
          <li><a href = '#'>Сувениры</a></li>
          <li><a href = '#'>Правила продажи</a></li>
        </ul>
      </div>
      <div className = {classes.footer_subscribe_and_news}>
      <h4 className = {classes.footer_zero_margine}>Подписка на новости</h4>
      <div className = {classes.info}>Будь в курсе наших акций</div>
      <input type = 'e-mail' placeholder = 'E-mail'></input>
      <button type = "submit">Подписаться</button>
      <div className = {classes.info}>Мы в социальных сетях</div>
      <FontAwesomeIcon className = {classes.faIcon_first} icon={faEyeSlash } />
      <FontAwesomeIcon className = {classes.faIcon} icon={faEyeSlash } />

      <FontAwesomeIcon className = {classes.faIcon} icon={faEyeSlash } />

      <FontAwesomeIcon className = {classes.faIcon} icon={faEyeSlash } />


      </div>
    </div>
  </div>
  );
}

export default Footer;

