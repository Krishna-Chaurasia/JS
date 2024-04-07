```javascript
// Q: In this file there are many Promises but they do not execute in sequence, some of them executes 1st and 
//  some of them executes later i.e there is no sequence.
//Ans:: we will find in this file that why this happens 


//****creating  promises */
console.log("\ncreating 1st Promise\n")
const promiseOne = new Promise(function(resolve, reject){
    //Do an sync task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve(); // after setTimeout complete then connect resolve() with .then() i.e promiseOne.then()
    },1000)
});  
 promiseOne.then(function(){
    console.log("Promise Consumed");
})  

//***** another way of creating and calling resolve i.e .then() without storing in in variable  */
console.log("\n another way of creating and calling resolve i.e .then() without storing in in variable\n")
new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("Async task 2")
    },1000)
    resolve();

}).then(function(){
    console.log("Async 2 resolved");
})

//****** 3rd Promise */
console.log("\ncreating 3rd Promise\n");
const promiseThree = new Promise(function(resolve, reject){
   
    setTimeout(function(){
        console.log('Async task is complete');
         // we can pass any data in parameter of resolve(), most of the time the data is of object type i.e { } or array i.e [] or functio() etc. 
         resolve({username:"Chai", email:"Chai@chaiexample.com"});
        },1000)
});  
promiseThree.then(function(userii){
    console.log(userii);
})


//*********** fetch(): it consumes promises */

// fetch() : it is very interesting feature of nodejs 

// Fetch API is a library of functions to make HTTP requests.
//The Fetch API has been supported by major browsers for years. Yet, it has only been part of the standard Nodejs. 
//Fetch is a new API in nodejs library since version 18.0. 0, released in April 2022.

// **** fetch() global function** 
//The global fetch() method starts the process of fectching a resource from the network, returning a promise which is 
//fullfilled once the response is available, or rejected if an error occurs.

// note : sde interview : Q: You requested from Promise and you get error code 404,so will it be in resolve or in reject?
// ANS:  it will be as a response i.e then() handler checks the response, it will be error only if request is failed 


//  Note: we can send data after fetch() i.e when promise is consumed 
/*
const headers = { 
    'C ontent-type': 'text/xml',
    'Breaking-Bad': '<3',
};
fetch('https://example.com/', { headers });
*/



```