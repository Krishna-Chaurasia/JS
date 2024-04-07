// most of the time we consume promises rather than creating promises
//**** syntax of consuming promises */

//fetch('https://something.com').then().catch().finally() 

// if response : it comes in then()
// if error: it comes in catch()
// finally() : everything comes in it 

// bluebird library: is mostly used.   
//                   - we can use all functionality of core js which we are using now through fectch()

//****creating  promises */

const promiseOne = new Promise(function(resolve, reject){
    //Do an sync task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve(); // after setTimeout complete then connect resolve() with .then() i.e promiseOne.then()
    },1000)
});  

// ***** consuming the promise 
 // .then() has connection with resolve parameter of the function 
                  // we get a call back function in .then()

 // in function value gets return of Promise's function i.e setTimeout() ...etc

 promiseOne.then(function(){
    console.log("Promise Consumed");
})  

//***** another way of creating and calling resolve i.e .then() without storing in in variable  */
//console.log("\n another way of creating and calling resolve i.e .then() without storing in in variable\n")
new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("Async task 2")
    },1000)
    resolve();

}).then(function(){
    console.log("Async 2 resolved");
})



