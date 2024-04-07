```javascript
const promiseThree = new Promise(function(resolve, reject){
   
    setTimeout(function(){
        console.log('Async task is complete');
         // we can pass any data in parameter of resolve(), most of the time the data is of object type i.e { } or array i.e [] or functio() etc. 
         resolve({username:"Chai", email:"Chai@chaiexample.com"});
        },1000)
});  
// .then() // accepts the parameter passed by resolve() i.e object{ } by variable name userii
promiseThree.then(function(userii){
    console.log(userii);
})


// ******* creating new Promise ********* 

console.log("creating promiseFour")
const  promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true; //make error  = false and check i.e there is no error
        if(!error) // it error is false, then go to if block
        {
            resolve({username: "Krishna", password: "123"});
        }
        else{
            reject('ERROR: Something went wrong');
        }
    },1000)
})

/*
const username = promiseFour.then((useri) => {
    console.log(useri);
    return useri.username

}).catch(); 
//console.log(username);  // username var. will not store return of useri.username; so makeing username is a waste 
*/

//**** creating of chaining of .then() */
promiseFour.then((useri) => {
    console.log(useri);
    return useri.username
   // return value of .then() will go to next .then()
})
.then( (myusername) => {
     //myusername = "Krishna";
     console.log(myusername); // myusername var. will store return of useri.username;
})
.catch(function(err){
    console.log(err); // value of err will print accordingly
})
.finally(()=> console.log("The promise is either resolved or rejected"));



```