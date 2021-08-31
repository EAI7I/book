import Slider from '@farbenmeer/react-spring-slider';
import Book_card from './book_card/Book_card';
import classes from './Content.module.css';
let slides = 5;


function Book_slider(props) {
    
    return(
        <section className = {classes.bookSlider}>
            <div className = {classes.title}>
                <h2>{props.category}</h2>
            </div>
            {window.onresize = function(){
                
            }}
            <Slider activeIndex={0}
            slidesAtOnce={slides}
            auto = {0}
            hasBullets = {false}
            hasArrows = {true}
            //ArrowComponent={ArrowComponent}
            //onSlideChange={onSlideChange}
            //setSlideCustom={setSlideCustom}
            >
                
                 {props.state.Books.map((book) => <Book_card book = {book} />)}
                 
                
               
        
            </Slider>
      
        </section>
    )
}
export default Book_slider