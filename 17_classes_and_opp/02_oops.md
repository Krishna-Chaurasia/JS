```javascript
//**********Constructor method***********
//NOTE: when we ceate many objects with same/different data, need to copy and paste which is hectic so use constructor method

const promiseOne = new Promise(function(resolve, reject){ })
const date = new Date()//new keyword is called constructor function it allows to create multiple copies/instances from same object 

//new keyword called constructor function it allows to create multiple instances/copies from same object,so less memory required

//***********Constructor method***********


//***** creating a function named User*/
console.log("\ncreating a function named User\n");
function User(username, loginCount, isLoggedIn){
    this.username = username  // left-hand side i.e this.username is variable and right hand side is value
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this // it will return object 
}
console.log(typeof(User)) // output: function
const userOne = User("Krishna", 8, true)
console.log(userOne); // will get all details very below

// **** creating new function named User2
console.log("\ncreating a function named User2\n");

function User2(username, loginCount, isLoggedIn){
    this.username = username  // left-hand side i.e this.username is variable and right hand side is value
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this // it will return object 
}
const useriiOne = User2("Krishna", 8, true)
const useriiTwo = User2("Chaurasia", 114, false)
console.log(useriiOne); //it will overwrite previous object value i.e useriiTwo's value in main object useriiOne 

console.log(typeof(useriiOne)) // output: object
console.log(typeof(useriiTwo)) // output: object

//****** creating a new function named User3 */
console.log("\ncreating a function named User3\n");

function User3(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Hello Welcome ${this.username}`)
    }

//return this // if we do not use return this, then it will automatically return object 'this' as implicitly defined 
}
console.log(typeof(User3)) // output: function
const userOneOne = new User3("Krishna Kumar", 88, true)//it will create a new object from function User3 i.e copy of features of User3
const userTwoTwo = new User3("Chaurasia KK", 166, false)//it will create a new object from function User3 i.e copy of features of  User3
console.log(userOneOne);
console.log(userTwoTwo);
console.log(userOneOne.greeting()); // calling the function greeting() from object userOneOne

console.log(typeof(userOneOne)) // output: object;
console.log(typeof(userTwoTwo)) // output: object;

console.log("\nchecking the constructor in object userOneOne i.e userOne.constructor\n");
console.log(userOneOne.constructor); // will return function User3 ; i.e will give reference about itself

console.log("\nchecking the instanceof in object userOneOne i.e userOne instanceof User3\n");
console.log(userOneOne instanceof User3); // will return true because it checks whether userOneOne is an instance of User3 or not 
console.log(userOneOne instanceof User2); // will return false because it checks whether userOneOne is an instance of User2 or not

// NOTE about 'new' keyword: 
// - it will always create an empty object i.e {} called instance
// - and it will always return object
// - along with 'new' keyword a constructor function is called, it packs all arguments and returns an object
// - and all the arguments gets injected in 'this' keyword
// - In last step we get all details in object from function

// NOTE : In browser's if we declare const newHero = ["hulk", "thor", "spiderman"]; then newHero is an array and
// after pressing enter it shows undefined in console because we didn't return it 
```