import { BrowserRouter, Route, Link } from "react-router-dom";
import classes from './Header.module.css';
let lsValue = localStorage.getItem('BooksInBucket');

function checkLocalStorage(){
  if(lsValue!=localStorage.getItem('BooksInBucket'))
  {
    lsValue = localStorage.getItem('BooksInBucket');
    document.querySelector('.' + classes.Buscket_counter).innerHTML = 'Корзина:' + lsValue;
  }
}
function Header(props) {
 
  return (
   
  <div className = {classes.Header}>
   <Link to ="/Home"> <div className = {classes.logo}><img src = "https://www.chitai-gorod.ru/ii/img/logo/main_logo_white.svg"></img></div></Link>
    <div className = {classes.search}><input type = 'text' placeholder = "найти..."></input></div>
    <div className = {classes.buscket}>
      <img src = "https://www.chitai-gorod.ru/ii/img/general/basket.svg"></img>
      <h3 className = {classes.Buscket_counter}>Корзина : {localStorage.getItem('BooksInBucket')}</h3>
      {console.log(props.state)}
    </div>
 </div>
  );
}

export default Header;

