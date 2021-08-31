import { BrowserRouter, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import classes from './Book_shower_massages.module.css';
import Book_shower_massage from "./Book_shower_massage";
let time = new Date();
let fullDate = `${time.getHours}.${time.getMinutes}.${time.getFullYear}.`
function Book_shower_massages(props) { 

  return (
  
  <div className = {classes.wrapper}>
     <Book_shower_massage/>
  </div>
  );

}

export default Book_shower_massages;

