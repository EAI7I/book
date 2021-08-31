
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Book_card from './book_card/Book_card';
import Book_slider from './book_slider';
import classes from './Content.module.css';

function Content_area(props) {
  return (
   
    <div className = {classes.content_area}>
      {props.state.categories.map((category) => <Book_slider state = {props.state} category = {category} />)}
       
  </div>
  );
}

export default Content_area;

