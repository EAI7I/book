import classes from './timer.module.css';

    
function Timer(props) {
    window.addEventListener('DOMContentLoaded', () =>{
        function setTime(){
            try{
            let days = converter().days,
            hours = converter().hours,
            minutes = converter().minutes,
            seconds = converter().seconds;
          
            document.querySelector("#days").innerHTML= days;
            document.querySelector("#hours").innerHTML= hours;
            document.querySelector("#minutes").innerHTML= minutes;
            document.querySelector("#seconds").innerHTML= seconds;
        }catch(e){}
            
            
        }
        
    function converter(){
    let startpoint = new Date();
    let deadline = '07-31-2022';
    let t = Date.parse(deadline)-startpoint.getTime();
   let days = Math.floor( (t/(1000*60*60*24)) ),
    seconds = Math.floor( (t/1000) % 60 ),
    minutes = Math.floor( (t/1000/60) % 60 ),
    hours = Math.floor( (t/(1000*60*60) % 24) );
    if (t < 0){
        clearInterval(interval_id);
        days=0;
        seconds=0;
        minutes=0;
        hours=0;
    }
    return {'days' : days,
    'hours' : hours,
    'minutes' : minutes,
    'seconds' : seconds
}
};

        let interval_id = setInterval(setTime, 1000);
        setTime();

        
    
    })
  return (
      <div className = {classes.wrapper}>
          <div className = {classes.info}><h2 className = {classes.info_title}>Акция для новых клиентов!</h2>
          <h3 className = {classes.info_description}>
Мы ценим каждого клиента и предлагаем вам стать одним из них на очень выгодных условиях.
Каждому, кто закажет доставку книги, будет предоставлена скидка в размере 20%!
Акция закончится 20 мая в 00:00
</h3>
</div>
<div className = {classes.timer}>
    <h3 className = {classes.timer_title}>Осталось до конца акции</h3>
    <div className = {classes.timer_digits}>
    <div className = {classes.time}>
            <span className = {classes.digit} id = 'days'></span>
            <div className = {classes.digit_name}>дней</div>
        </div>
    
        <div className = {classes.time}>
            <span className = {classes.digit} id = 'hours'></span>
            <div className = {classes.digit_name}>часов</div>
        </div>
        <div className = {classes.time}>
            <span className = {classes.digit} id = 'minutes'></span>
            <div className = {classes.digit_name}>минут</div>
        </div>
        <div className = {classes.time}>
            <span className = {classes.digit} id = 'seconds'></span>
            <div className = {classes.digit_name}>секунд</div>
        </div>
    </div>
    </div>
      </div>
  )}


  export default Timer;