```javascript
//const clock = document.querySelector(#clock);
const clock = document.getElementById('clock');


//setInterval() : has two parameters(function(){}, time in ms)
setInterval(function(){
    let date = new Date();
   // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000) //it tells when to reload/rerun again and again after specific time
```