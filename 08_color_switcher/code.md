```javascript
const buttons = document.querySelectorAll('.button');
//console.log(buttons); // we can use foreach loop 
const body = document.querySelector("body"); //tag named body is selected

//addEventListener() : it is used to add event listener to an element, so that it can be triggered when an event occurs

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click' , function(e){
        console.log(e); // gives all the info about the event
        console.log(e.target)  // it tells from where the button is clicked
        if(e.target.id === 'grey'){
           // body.style.backgroundColor = 'grey';
            //or 
            body.style.backgroundColor = e.target.id; //e.target.id has value grey
        }
        if(e.target.id === 'blue'){
            // body.style.backgroundColor = 'blue';
             //or 
             body.style.backgroundColor = e.target.id; //e.target.id has value blue
         }
         if(e.target.id === 'white'){
            // body.style.backgroundColor = 'white';
             //or 
             body.style.backgroundColor = e.target.id; //e.target.id has value white
         }
         if(e.target.id === 'yellow'){
            // body.style.backgroundColor = 'yellow';
             //or 
             body.style.backgroundColor = e.target.id; //e.target.id has value yellow
         }
         if(e.target.id === 'black'){
            // body.style.backgroundColor = 'black';
             //or 
             body.style.backgroundColor = e.target.id; //e.target.id has value black
             body.style.color = 'white';
         }
    })
})
```