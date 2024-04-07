```javascript
 //generate a random color
 //There is range of hex values due to which random color is generated
 // hex value contains 6 digits
 // range of hex value : 0123456789ABCDEF  // total 16

 const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#"; //just need to add 6 more values
    //for loop run 6 times and just add 6 random values from hex var. and hence random color generated
    for(let i = 0;i<6;i++){
        color+= hex[Math.floor(Math.random()*16)]
    }
    return color ; // it will return random colore i.e is being generated
}

// console.log(Math.floor(14.4));  //14
// console.log(Math.floor(14.6));  //14
// console.log(Math.floor(16.4));  //16
// console.log(Math.floor(15.6));  //15

//console.log(Math.random());
//console.log(Math.floor(Math.random()*16)) //we want to inclue 0, so do not add +1 and 
                            // we want maximum 16 number so multiply by 16
console.log(randomColor());

let intervalId; //bydefalult set to undefined
//console.log(intervalId); //o/p : undefined
const startChangingColor = function(){
    //if (!intervalId) checks if intervalId is falsy. If it is falsy (i.e., if it's null, undefined, etc.),
    // the condition evaluates to true, and the code block inside the curly braces {} executes.
    if(!intervalId){ //if intervalId is null i.e true then go to if scope & set value in intervalId
    intervalId  = setInterval(changeBgColor,1000);
    }
    function changeBgColor(){
    document.body.style.backgroundColor =randomColor(); //give close paranthesis() to randomColor due function
    }
};
const stopChangingColor = function(){
 clearInterval(intervalId);
 intervalId = undefined;
 //or

 //intervalId = null; // dereferencing the variable i.e setting the value of intervalId to null so that if condition in startChangingColor will work
 //if intervalId is not set to null or undefined then startChangingColor will not work
};

document.querySelector('#start').addEventListener('click',startChangingColor); // no need to give close() parathesis to function 
document.querySelector('#stop').addEventListener('click',stopChangingColor);

// Note
/*
When you define a function using a function expression and assign it to a variable like so:
let myFunc = function() { // Function body }; 

The same principles apply:

1.	myFunc();: This syntax is used to directly invoke the function myFunc that was assigned to the variable. You're telling JavaScript to execute the function immediately.

2.	myFunc;: This syntax refers to the function itself without calling it. You're passing a reference to the function, not actually calling it.
Therefore, when you attach an event listener using addEventListener or when you call a function directly, you would use the appropriate syntax based on whether you want to execute the function immediately or pass a reference to it.

See Example : :

1.	myFunc();: This syntax is used to directly invoke the function named myFunc. When you use parentheses (), you're telling JavaScript to execute the function immediately. This is how you call a function in JavaScript. If your function requires any arguments, you'd pass them within the parentheses.

2.	myFunc;: This syntax refers to the function itself without calling it. It's used when you want to reference the function but not execute it immediately. This is often used when passing functions as arguments to other functions or when assigning them to variables.

When you're attaching an event listener using addEventListener, you're passing a reference to the function, not actually calling it. That's why you don't include parentheses there. You're saying "when this event occurs, call this function", not "call this function right now".

So, when you write:

document.getElementById("myButton").addEventListener("click", myFunc); 
You're telling the browser, "When the 'click' event occurs on the element with the ID 'myButton', call the function myFunc". You're passing a reference to myFunc, not executing it immediately.
However, in the console or in other parts of your code where you do want to execute the function immediately, you would use the myFunc(); syntax to do so.


*/
```