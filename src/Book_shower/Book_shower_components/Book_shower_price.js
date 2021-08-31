
import classes from './Book_shower_price.module.css';
import classForBucket from '../../components/Header/Header.module.css'

let lsValue = localStorage.getItem('BooksInBucket');

function checkLocalStorage(){
  if(lsValue!=localStorage.getItem('BooksInBucket'))
  {
    lsValue = localStorage.getItem('BooksInBucket');
    document.querySelector('.' + classForBucket.Buscket_counter).innerHTML = 'Корзина:' + lsValue;
  }
}

let value = localStorage.getItem('BooksInBucket')||0;

localStorage.setItem('BooksInBucket', value);

function addBookInBucket(){
  value++;
  localStorage.setItem('BooksInBucket', value);
  checkLocalStorage();
}



function Book_shower_price(props) { 

  return (
  
  <div className = {classes.wrapper}>
 <div className = {classes.price_and_avalible}>
 <div className = {classes.avalible}>
   <h3>Доступно:</h3>
    </div>
    <div className = {classes.charger_cells}>
   <div className = {classes.charger_cell}></div>
   <div className = {classes.charger_cell}></div>
   <div className = {classes.charger_cell}></div>
   <div className = {classes.charger_cell}></div>
   </div>
   <div>
    <div className = {classes.price}>
      <h2>{props.book_object.bookCost}</h2>
    </div>
    
    <div className = {classes.offer}>
      17 бонусов
    </div>
    </div>
    <div className = {classes.buy}>
      <button className = {classes.buy_btn} onClick={addBookInBucket}>Купить</button>
    </div>
 </div>
  </div>
  );

}

export default Book_shower_price;

