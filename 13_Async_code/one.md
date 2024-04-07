<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Async and code</h1>
    <button id="stop">stop</button>
</body>
<script>
//setTimeout() : it is not core function of js, we get this function through brower & other APIs
//must study about clearInterval() & clearTimeout() along with setTimeout()

// In core js engine, there is call stack & memory

//setTimeout(handler(whhich is funciton), timeout(it's in no. i.e in ms)); 1000ms = 1sec


setTimeout(function(){
    console.log("Krishna");
},2000)// after 2000ms i.e 2s everything in function executed once and then stop i.e no further execution of the funciton

const sayKrishna = function(){
    console.log("Kumar")
}
setTimeout(sayKrishna,3000) // we have given reference instead of providing function

// changing inner text of h1 tag using querySelector ang ineerHTML

const changeText = function(){
    document.querySelector('h1').innerHTML = "best JS series";

}
const changeMe = setTimeout(changeText,2000)//even though setTimeout is stored in var. 
                      // it will still execute without event calling changeMe var.
// use clearTimeout(), stop timeout if not clicked within specific time

//clearTimeout(changeMe)//it will remove setTimeout functionn; so apply clearTimeout() with events
document.querySelector('#stop').addEventListener('click',function(){  
    clearTimeout(changeMe)
    console.log("STOPPED")
})//if we click stop button within 2 sec then the innerHTML of h1 tag will not chang else it will change

</script>
</html>