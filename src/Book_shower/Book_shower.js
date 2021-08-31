import { BrowserRouter, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import classes from './Book_shower.module.css';
import Book_shower_img from "./Book_shower_components/Book_shower_img";
import Book_shower_information from "./Book_shower_components/Book_shower_information";
import Book_shower_price from "./Book_shower_components/Book_shower_price";
import Book_shower_description from "./Book_shower_components/Book_shower_description";
import Book_shower_massages from "./Book_shower_components/Book_shower_massages";

let url = document.location.href;
let id_of_book = url.substr(-1 , 1);
let book_object;
console.log(id_of_book)

function Book_shower(props) {

  {props.state.forEach((item) =>{
    let url = document.location.href;
    let id_of_book = url.substr(-1 , 1);
    window.scrollTo(0, 0);
    if(item.id == id_of_book){
      book_object = {...item}
      console.log(book_object )
      console.log(id_of_book)
    }
  })}
  return (  
    <div>
         <div className = {classes.wrapper}>
         <Book_shower_img book_object = {book_object}/>
         <Book_shower_information book_object = {book_object}/>
         <Book_shower_price book_object = {book_object}/>
         </div>
      <Book_shower_description description = {book_object.description}/>
      <Book_shower_massages/>
</div>
  );
}

export default Book_shower;

