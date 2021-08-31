import { BrowserRouter, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import classes from './Book_shower_massage.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
let time = new Date();
let fullDate = `${time.getHours}.${time.getMinutes}.${time.getFullYear}.`
function Book_shower_massage(props) { 

  return (
  
  <div className = {classes.wrapper}>
  <div className = {classes.head}>Супер</div>
  <div className = {classes.date}>{time.toDateString()}</div>
  <div className = {classes.text}>Очень полезная, очень легко читается! Всем советую!!!</div>
  <div className = {classes.likes}><img src = 'https://otvet.imgsmail.ru/download/u_f86664f49de86dc7eb6a40c1aa41ff28_800.png'></img> лайки</div>
  <div className = {classes.name}>Антон</div>
  </div>
  );

}

export default Book_shower_massage;

