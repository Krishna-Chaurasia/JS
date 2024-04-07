```javascript

function SetUsername(username){
    //complex DB calls
    this.username = username //here local "this" will vanished when called inside CreateUser(), so global 'this' is given
    console.log("called");
}

function createUser(username,email,password){
    //SetUsername(username)//it will pass reference in it & will work and take above function SetUsername and work but 
                           // 'this' inside SetUsername() will vanished
                         // So, use below

  //  SetUsername.call(username)//.call:will explicitly call method SetUsername() but 'this' inside SetUsername() will vanished
   
// so give global 'this' context which will hold reference of SetUsername()
   SetUsername.call(this,username); // global this is given for SetUsername(), so it will be used in SetUsername() 
                                    //rather than its local 'this' of SetUsername
    

    // call: current execution context passesto another function
    
    this.email = email
    this.password = password

}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai)

//jaise hi class se ek object initialize hoga i.e new keyword waise hi constructor call ho jayega automatically
```