import { BrowserRouter, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import classes from './Book_shower_information.module.css';
import { useState } from 'react';

function Book_shower_information(props) { 

  return (
    <div className = {classes.info_block}>
    <div className={classes.info_block__title}>
      <h3>{props.book_object.bookName}</h3>
    </div>
    <div className={classes.info_block__information}>
      <table>
        <tr><td>ID товара</td> <td>2557931</td></tr>
        <tr><td>Издательство</td> <td>2557931</td></tr>
        <tr><td>Год издания</td> <td>2557931</td></tr>
        <tr><td>ISBN</td> <td>2557931</td></tr>
        <tr><td>Кол-во страниц</td> <td>2557931</td></tr>
        <tr><td>Формат</td> <td>2557931</td></tr>
        <tr><td>Тип обложки</td> <td>2557931</td></tr>
        <tr><td>Вес, г </td> <td>2557931</td></tr>
      </table>
    </div>
  </div>
  );

}

export default Book_shower_information;

