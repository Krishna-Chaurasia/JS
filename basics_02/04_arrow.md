//this : it is used to refer current context of object 
```javascript
const user = {
    username: "hitesh", 
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website(this is used here)`) //here 'this' is used to refer current context of object data
                                                            // and 'this' is recommended to use, when accessing current variable

         console.log(`${this.username} , welcome to our website(this is not used)`) // here we didn't used this keyword and it is not recommended
          console.log(this) // it is used to check current context of the object i.e to check if any key's value is changed or not 
        }
}

user.welcomeMessage()// will display all the thing of function welcomeMessage() of object user { }

// changing username's value of object user{}

console.log("\n++++changing username's value of object user{}++++\n")

user.username = "sam"

user.welcomeMessage() // now will display with sam name 

// ******** Checking current context of scope ********
console.log("\n++++Checking current context of scope++++\n")

console.log(this) // return empty i.e {} which means no object
                 // if we run this syntax in console of browser, then it will return window because
                 // it the biggest object which has all properties of browser/window


// +++++++ we can't use this keyword in function with some variable ++++++

console.log("\n++++Using this keyword with function++++\n")

function chai(){
    let username = "krishna"
    console.log(this.username) // return undefined
    // console.log(this) // will give something
}
chai()

console.log("\n++++Using this keyword with function declared with const chai_01 = fun() { } ++++\n")

const chai_01 = function(){
    let username = "krishna"
    console.log(this.username) // can't use this in function 
}
chai_01()

// +++++++ Arrow Function +++++++

console.log("\n ++++ Creating Arrow Function(=>) ++++ \n")

const chai_02 =  () => {

    let username = "krishna"  
    console.log("arrow fun. ",username)        
    console.log(this)  // gives empty parenthesis i.e {}

}
chai_02()

// ******sum of num. using arrow fun. *******
console.log("\n ++++ sum of no. using Arrow Function(=>) ++++ \n")

const addTwo =  (num1,num2) => {

    return num1 + num2   
}
console.log("sum using arrow fun. addTwo : ", addTwo(3,5));


// ******sum of num. using arrow fun. with implicit return method  *******

console.log("\n ++++ sum of no. using Arrow Function(=>) with implicit return ++++ \n")

const addTwo_01 =  (num1,num2) =>  // or we num1 + num2 in this line also but then we need to remove it from bleow
                 
                 num1 + num2   
  
console.log("sum using arrow fun. addTwo_01 with implicit return: ", addTwo_01(5,5));

// +++++++ OR +++++++

// ******sum of num. using arrow fun. with implicit return method  *******

console.log("\n ++++ sum of no. using Arrow Function(=>) with implicit return ++++ \n")

const addTwo_02 =  (num1,num2) =>   num1 + num2   
  
console.log("sum using arrow fun. addTwo_02() with implicit return: ", addTwo_02(5,51));


// +++++++ OR +++++++

// ******sum of num. using arrow fun. with implicit return method  *******

console.log("\n ++++ sum of no. using Arrow Function(=>) with implicit return ++++ \n")

const addTwo_03 =  (num1,num2) =>   (num1 + num2)   
  
console.log("sum using arrow fun. addTwo_03() with implicit return: ", addTwo_03(51,51));


// +++++++ OR +++++++

// ******sum of num. using arrow fun. with implicit return method along with object{ }  *******

console.log("\n++sum of no. using Arrow Function(=>) with implicit return along with object{ }++\n")

const addTwo_04 =  (num1,num2) =>   ({username: "Krishna"} )   
  
console.log("sum of using arrow fun. addTwo_04() with implicit return with object { }: ", addTwo_04(51,51));
```
```
output:
hitesh , welcome to website(this is used here)
hitesh , welcome to our website(this is not used) 
{
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]      
}

++++changing username's value of object user{}++++

sam , welcome to website(this is used here)       
sam , welcome to our website(this is not used)    
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}

++++Checking current context of scope++++

{}

++++Using this keyword with function++++

undefined

++++Using this keyword with function declared with const chai_01 = fun() { } ++++

undefined

 ++++ Creating Arrow Function(=>) ++++

arrow fun.  krishna
{}

 ++++ sum of no. using Arrow Function(=>) ++++

sum using arrow fun. addTwo :  8

 ++++ sum of no. using Arrow Function(=>) with implicit return ++++

sum using arrow fun. addTwo_01 with implicit return:  10

 ++++ sum of no. using Arrow Function(=>) with implicit return ++++

sum using arrow fun. addTwo_02() with implicit return:  56

 ++++ sum of no. using Arrow Function(=>) with implicit return ++++

sum using arrow fun. addTwo_03() with implicit return:  102

++sum of no. using Arrow Function(=>) with implicit return along with object{ }++

sum of using arrow fun. addTwo_04() with implicit return with object { }:  { username: 'Krishna' }
```



