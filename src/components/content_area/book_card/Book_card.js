import { BrowserRouter, Route, Link } from "react-router-dom";

import classes from './Book_card.module.css';
import classForBucket from '../../Header/Header.module.css'

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

function Book_card(props) {

  return (

    <div className = {classes.book_shower_body} >
          <Link to = {`Book/${props.book.id}`}><img src = {props.book.book_img} className = {classes.book_shower_img}></img></Link>
          <div className = {classes.book_shower_name}>{props.book.bookName}</div>
          <Link to = {`Book/${props.book.id}`}><div className = {classes.book_shower_author}>{props.book.bookAuthor}</div></Link>
          <div className = {classes.book_shower_footer}>
            <div className = {classes.book_shower_cost}>{props.book.bookCost}</div>
            <button className = {classes.book_shower_buy} onClick={addBookInBucket}>Купить</button>
          </div>
        </div>
        
        
  );
}

export default Book_card;

