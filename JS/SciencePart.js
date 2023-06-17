let Time = 1800;
function setTime(){
   if(Time == 0) return
   let h = Math.floor (Time/1800);
   let m = Math.floor((Time%1800)/60);
   let s = (Time%1800)%60;
   document.querySelector('#houre').innerHTML = h
   document.querySelector('#minutes').innerHTML = m
   document.querySelector('#seconds').innerHTML = s
}

setInterval(()=>{
   Time -=1;
   setTime()

} , 1000)