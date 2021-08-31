import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import GeneralInformation from './components/General_information/General_information';
import Footer from './components/Footer/Footer';
import Content_area from './components/content_area/content';
import { BrowserRouter, Route, Link,Redirect } from "react-router-dom";
import Book_shower from './Book_shower/Book_shower';
import Timer from './components/General_information/Timer';

function App(props) {
  return (
    <div className="Shop">
      <Redirect from = '/' to = '/Home' />
      <Header />
      <NavBar />
      <Route path="/Home">
        <GeneralInformation />
        <Timer/>
        <Content_area state={props.state}/>
      </Route>
      {props.state.Books.map((book) => {return <Route path={`/Book/${book.id}`}>{console.log(book.id)}<Book_shower state={props.state.Books}/></Route>;})}
      <Footer />
    </div>
  );
}

export default App;
