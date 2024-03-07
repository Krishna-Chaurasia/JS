/* 
Objects:  in js there are two ways of creating objects
1)Literals
2)Constructors

"Singleton" : it means apne jaisa ek hi object hai if 'Constructors' are used to create object
-> Singleton will not form, if objects are declared with 'Literals'

 */

//***** Object Creation using Constructor method ******
//Object.create

//**********creating object using literals************
// const JsUser ={}
 const JsUsers ={}     // { } is called as object 

//***********declaration of Symbol *********
const mySym = Symbol("key1")

const JsUser = {
    name: "krishna",  // name is itself in string, and it is in key-value pairs  
    "full name" : "Krishna Chaurasia",  // here "full name" key is strictly defined as string,
                                        //  so to access need to use 'jsUser["full name"]'
    age: 19,
    location: "Jaipur",
    email:  "krishna@gamil.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"],

    //declaring symbol inside object use [ ], e.g [mySym] : "mykey1", now mySym is Symbol type
 // but before declaring symbol inside object, we need to declare its key variable outside the object
    [mySym]: "mykey1"

}

//******** Ways of accessing objects ***********
// 1st way
console.log("1st way of accessing the object is : ")
console.log("console.log(Jsuser.email) : \n")
console.log(JsUser.email,"\n")

// 2nd way
console.log("2nd way of accessing the object is : ")
console.log(`console.log(Jsuser["email"] : \n`)
console.log(JsUser["email"],"\n")  // as all keys are string, so give keys in " " i.e "email", "name" ...etc

console.log(`Accessing "full name" key which is strictly defined as string : `)
console.log(`console.log(jsUser["full name"]) : \n`)

console.log(JsUser["full name"],"\n") 

console.log("Accessing Symbol key from object")
console.log(`console.log(jsUser[mySym]) : \n`)
console.log(JsUser[mySym]) // do not use "mySym" because mySym is Symbol type
console.log(typeof JsUser[mySym]) 

//********* changing object's values  **********
console.log("\nChanging object's values \n")
console.log("old eamil is : " ,JsUser.email)

JsUser.email = "kumar@chatgpt.com"
console.log("new eamil is : " ,JsUser.email)

//****Freeze the object so that no one can change the value of object ***********
// syntax : Object.freeze(JsUser)
console.log("\nfreezing object JsUser, so that no changes can be done : \n")
Object.freeze(JsUser)  // after applying this no key value will be change

JsUser.email = "ram@chad.com"
console.log("NO changes can be seeen : ",JsUser.email)  // above changes will not reflect in object variable 

//******* printing all object's values ************
console.log("\nDisplaying all object's values : ")
console.log(`console.log(JsUser)\n`)

console.log(JsUser)

// *********** creating another object ***********
const JsUser1 = {
name: "Krishna"
}
//********* declaring function with object's variable's key *****
console.log("\ndeclaring function as a value with object's(JsUser1) variable's key(greeting) : ")

// created a new key variable i.e greeting of object(JsUser) having value as function() { }
JsUser1.greeting = function(){ 
    
    console.log(`Hello Js User` ); 
}
JsUser1.greeting_two = function(){ 
    
    console.log(`Hello Js User, ${this.name}` ); //this : it extracts key's value, e,g this.name

}

console.log("displaying greeting(key) of object  :  \n")

console.log("when we use console.log(JsUser.greeting) : ",JsUser1.greeting) // o/p : [Function (anonymous)] , it is function's reference 

console.log("when we use console.log(JsUser.greeting()) : ",JsUser1.greeting(),"\n") // o/p : undefined 

console.log("when we use console.log(JsUser.greeting_two()) : ",JsUser1.greeting_two()) // o/p : hello Js User, Krishna ....... undefined









