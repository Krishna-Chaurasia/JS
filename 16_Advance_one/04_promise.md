```javascript
/*
const promiseFive = new Promise(function(resolve,reject){
      setTimeout(function(){
        let err = true;
        //let err = false;
        if(!err){
            resolve({username:"Javascript",password: "123"})
        }
        else{
            reject('Error: JS went wrong')
        }
      },1000)
})
// - consuming promiseFive with another method called async
// - async: it waits for sometime to complete the tasks, if the task is not completed then it gives error on the spot 

async function consumePromiseFive(){
    //await promise_Name : it is used to wait for the any kind of result to store from promise which is called
    const response = await promiseFive   // promise is an object i.e we do not use () i.e promiseFive()
    console.log(response);
    
    // In this scope better to use try-catch block to handle errors
    
}
// NOTE : async await will not directly handle error, async await will give warning or type of error that is coming

consumePromiseFive(); // if resolve will not execute, then will throw catch()/reject() error, so make err = false

*/


 // ********** Using try{ } catch(){ } block  in async function()
// ******* using async await, try catch instead of .then(), .catch()
 const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
      let err = true;
      //let err = false;
      if(!err){
          resolve({username:"Javascript",password: "123"})
      }
      else{
          reject('Error: JS went wrong')
      }
    },1000)
})
// - consuming promiseFive with another method called async
// - async: it waits for sometime to complete the tasks, if the task is not completed then it gives error on the spot 

async function consumePromiseFive(){
 
  // **** handling error with using try{  } catch () { }
  
  try{
    const response = await promiseFive
    console.log(response);
  }
  catch(erro){
    console.log(erro);
  }

}
// NOTE : async await will not directly handle error, async await will give warning or type of error that is coming
consumePromiseFive(); // if resolve will not execute, then will throw catch()/reject() error, so make err = false
```