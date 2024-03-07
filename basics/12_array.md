```javascript
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
//push() : operation does not return any new array, it extends the existing array 
console.log(marvel_heros.push(dc_heros)) // o/p : 4, because total 4 element present, 4th element is dc_heros 's array
console.log(marvel_heros) // due to above push() operation, marvel_heros permanently store 4th element which is dc_heros's array values

//********** accessing values of marvel_heros's array **********

console.log("\naccessing values of marvel_heros's array\n")

console.log(" 0th index : ",marvel_heros[0])
console.log(" 1st index : ",marvel_heros[1])
console.log(" 2nd index : ",marvel_heros[2])
console.log(" 3rd index : ",marvel_heros[3])
console.log(" 4th index : ",marvel_heros[4])
console.log(" 3rd index 1st value : ",marvel_heros[3][0])
console.log(" 3rd index 3rd value: ",marvel_heros[3][2])
```
```
output:
4
[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

accessing values of marvel_heros's array

 0th index :  thor
 1st index :  Ironman
 2nd index :  spiderman
 3rd index :  [ 'superman', 'flash', 'batman' ]
 4th index :  undefined
 3rd index 1st value :  superman
 3rd index 3rd value:  batman
 ```
// ********* using concat on arr1 and arr2 **********
//concat : it combines two or more array and return new array 
```javascript
console.log("\nusing concat on arr1 and arr2\n")

const arr1 = ["krishna", "Kumar", "chaurasia"]
const arr2 = ["ram","shyam","karan"]

const arr3 = arr1.concat(arr2)
console.log("array value of arr1 after concat with arr2 : " , arr3)
```
```
output:
using concat on arr1 and arr2

array value of arr1 after concat with arr2 :  [ 'krishna', 'Kumar', 'chaurasia', 'ram', 'shyam', 'karan' ]     
```
// ****** using spread operator ********

//spread operator(...) : remember, when a glass is broken into many pieces or pieces are spread
                      // uses ... three dots
console.log("\nusing spread operator\n")
```javascript
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const arr1 = ["krishna", "Kumar", "chaurasia"]
const arr2 = ["ram","shyam","karan"]

const arr3 = arr1.concat(arr2)
console.log("array value of arr1 after concat with arr2 : " , arr3)

const all_arr = [...arr1,...arr2]  // sprad
console.log(all_arr)

const all_arr_1 = [...arr1, ...arr2, ...marvel_heros, ...dc_heros]
console.log(all_arr_1)
```
```
output:
using spread operator

[ 'krishna', 'Kumar', 'chaurasia', 'ram', 'shyam', 'karan' ]
[
  'krishna',
  'Kumar',
  'chaurasia',
  'ram',
  'shyam',
  'karan',
  'thor',
  'Ironman',
  'spiderman',
  [ 'superman', 'flash', 'batman' ],
  'superman',
  'flash',
  'batman'
]
```
//******  another array having listed array **********
```javascript
console.log("\nusing flat() method \n")
// flat() : method must have argument, it creates single array if a single array is containing multiple sub-arrays  in itself
const another_array = [3,2,1, [6,5,4],9, [3,6, [5,4]]] // here, there are many arrays inside one array

const real_another_array = another_array.flat(Infinity) // infinity is the depth of flat(), it can also be 1,2,3,4,.... 
console.log(real_another_array)

// ******checking that the given thing is array or not********
console.log("\nusing Array.from() method \n")
console.log("checking if the given thing i.e 'Krishna' is array or not :: ",Array.isArray("Krishna"))
console.log("creating array from 'Krishna' :: ", Array.from("Krishna"))
console.log("will give empty array :: ", Array.from({name: "Krishna"})) //o/p: [],  here 'name' is key  and 'Krishna' is value, 
                                  //if key and value are given then will get confused that to whome it should make array

```
```
output:

using flat() method

[
  3, 2, 1, 6, 5,
  4, 9, 3, 6, 5,
  4
]

using Array.from() method

checking if the given thing i.e 'Krishna' is array or not ::  false
creating array from 'Krishna' ::  [
  'K', 'r', 'i',
  's', 'h', 'n',
  'a'
]
will give empty array ::  []
```
// ******Use of Array.of()********
```javascript
console.log("\nusing Array.of() method \n")
//Array.of() : it combines different variable value into single array and gives new array

let score1 = 100
let score2 = 200
let score3 = 300

console.log("Will combine all different given variable into single array : ",Array.of(score1,score2,score3))  
// here there are multiple variable which need to be converted into a single array

let all_score = Array.of(score3, score2, score1)
console.log("Will combine all different given variable into single array : ", all_score)
```
```
output:
using Array.of() method

Will combine all different given variable into single array :  [ 100, 200, 300 ]
Will combine all different given variable into single array :  [ 300, 200, 100 ]
```
