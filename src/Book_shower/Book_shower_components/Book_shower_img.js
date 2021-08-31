import { BrowserRouter, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import classes from './Book_shower_img.module.css';
import { useState } from 'react';

let fun = (image , book_img, flag) => {
  if(image!=book_img && flag){
    window.location.reload();
    // flag = false;
    console.log(3)
  }
}
function Book_shower_img(props) { 
  return (
  
  <div className = {classes.picture}>
  <img src = {`${props.book_object.book_img}`}></img>
  </div>
  );

}

export default Book_shower_img;

