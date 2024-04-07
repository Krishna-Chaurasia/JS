```javascript
// Object literal: it means creating object with key value pairs 

// creating object of variable user
console.log("\ncreating object of variable user\n");
const user = {
    username: "Krishna",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database ");
//there is username defined above in object user but below line shows error because username is not defined in function getUserDetails
//        console.log(`Username : ${username}`);  //error    

//so we need to give 'this' keyword to include username from outside in this function, i.e current context of the data
console.log(`Username : ${this.username}`);//will print username's value because 'this' keyword
                                          // inclued username from outside of this function 
  
console.log(this)//will print current context of the data i.e object user's all value i.e all the value stored in the memory gets printed                                       

// when we need to get current context of the data, we can use this keyword
//e.g there are several monday in month so we need to get exact context of the specific monday,so use can use this keyword

  }
}

console.log(user.username);
console.log(user.getUserDetails());

console.log(this); // it will print empty object {} i.e there is nothing in global context
 // if we perform the same operation in console of browser, then it will return window because there are many objects in the winow 


// creating object of variable user2 with same data as user
console.log("\ncreating object of variable user2 \n");

const user2 = {
    username: "Krishna",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database ");
      console.log(`Username : ${this.username}`);
       console.log(this)
  }
}
console.log(user2.username);
console.log(user2.getUserDetails());

//**********Constructor method***********
//NOTE: when we ceate many objects with same/different data, need to copy and paste which is hectic so use constructor method


```