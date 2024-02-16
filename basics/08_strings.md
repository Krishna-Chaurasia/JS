// modern way of displaying strings with variable in console is to use backtiks ` `

const name = "Krishna"   // one way of declaring string
const repoCount = 50 
```javascript
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // this way of displaying data is called string interpolation
```
```
output:
Hello my name is Krishna and my repo count is 50
```

// types of string declaration 

 let name1 = "chaurasia" //typeof: is string
 ```javascript
  console.log(typeof name1) //typeof: is string
  ```
  ```
  output:
  string
  ```
 let gameName = new String('Krishna chaurasia') // typeof: is object

 ```javascript
 console.log(typeof gameName)   // typeof: is object

 console.log(gameName[0]) //gives the which character present at some position
 console.log(gameName.__proto__)   //

console.log(gameName.length) //gives the length of character

console.log(gameName.charAt(9)) // gives that which character is present at some position; 
// charAt() almost same as string's var[] e.g gameNam[0]
 console.log(gameName.charAt('t'))  
```
```
output:
object
K
{}
17
h
K
```

//******** toUppercase() and toLowercase() *************//

```javascript
 console.log(gameName.toUpperCase())  // changes the string into uppercase
console.log(gameName.toLowerCase())  // changes the string to lowercase

console.log(gameName.indexOf('n'))  // gives the index number of any character in string
```
```
output:
KRISHNA CHAURASIA
krishna chaurasia
5
```
 

  // ***************SubString*****************
```javascript
const newString = gameName.substring(0,5) // only index from(0-5) character will pass in new string
console.log(newString) // o/p: Krish  

const otherString = gameName.substring(-8,5) // only index from(0-5) character will pass in new string
console.log(otherString) // o/p: Krish   
// In substring we can't use -ve , if -ve given then bydefault start with index 0  
```
```
output: 
Krish
Krish
```

//**********slice **********//
```javascript
const anotherString = gameName.slice(-2, 6)
console.log(anotherString) 

//*********trim() method **************//
const StringOne = "          krishna           "
 console.log(StringOne);
 console.log(StringOne.trim())  // trim : will erase the extra spaces from left and right side
```
```
output:

          krishna
krishna
```

//*********replace(), includes() **************//
```javascript
const url = "https://krishna.com/krishna%20chaurasia"  // see %20
console.log(url.replace('%20','-')) //replacing %20 with -

//****includes() method : gives o/p in true/false */

 console.log(url.includes('krishna')) // o/p: true,, includes() : it checks whether 'krishna' is included ot not
 console.log(url.includes('kumar')) // o/p: false
```
```
output:
https://krishna.com/krishna-chaurasia
true
false
```

//*********** split() method */
```javascript
const stringvar = new String('krishna-hc-com')  //typeof is object
// console.log(typeof stringvar) //typeof is object
// console.log(stringvar.split('-'))  // give o/p in split format in arrays form, but typeof stringvar.split('-') is still object

const a = "krish-kumar-chaurasia"  // typeof is string
//console.log(typeof a) // typeof is string
//console.log( a.split('-'))  // give o/p in split format in arrays form, but typeof a.split('-') becomes object
```
```
output:
object
[ 'krishna', 'hc', 'com' ]
string
[ 'krish', 'kumar', 'chaurasia' ]
```

//








