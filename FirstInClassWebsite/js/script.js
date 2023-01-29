function callDateTime(){
    var currentDate=(new Date()).toDateString();
    var currentTime=(new Date()).toLocaleTimeString(); 
    document.getElementById('watch').innerHTML=`${currentDate}-${currentTime}`;
  }
  
 
setInterval(function(){  callDateTime() }, 1000);