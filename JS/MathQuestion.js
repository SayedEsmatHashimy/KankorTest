let Time = 3600 ;
function setTime(){
   if(Time == 0) return
   let h = Math.floor (Time/3600);
   let m = Math.floor((Time%3600)/60);
   let s = (Time%3600)%60;
   document.querySelector('#houre').innerHTML = h
   document.querySelector('#minutes').innerHTML = m
   document.querySelector('#seconds').innerHTML = s
}

setInterval(()=>{
   Time -=1;
   setTime()

} , 1000)