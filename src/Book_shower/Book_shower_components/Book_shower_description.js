import { BrowserRouter, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import classes from './Book_shower_description.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Book_shower_description(props) { 

  return (
  
  <div className = {classes.description}>
 <div className = {classes.annotation}>Анотация</div>
 <div className = {classes.text}> {props.description}</div>
  </div>
  );

}

export default Book_shower_description;

