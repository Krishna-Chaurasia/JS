

const coding = ['js','ruby','java','python','cpp']
// forEach does not return any value

const values = coding.forEach((item)=>{
    //console.log(item)
    return item 
})
//console.log(values) // o/p : undefined, forEach does not return any thing 


// ****** using a filter() method so that it returns something ******

console.log("\nusing filter() method so that it return something\n")

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 4 ) //will return all the num > 4
console.log(newNums)

 
console.log("\n using filter() method with scope so that it return something\n")


const newNums_01 = myNums.filter( (num) => {    //will return all the num > 4
      return  num > 4 
} ) 
console.log(newNums_01)



// ****** using a forEach loop in such a way so that it returns something ******

console.log("\nusing a forEach loop in such a way so that it returns something\n")

const forEach_arr =[]

myNums.forEach( (num) => {
      if(num>4){
        forEach_arr.push(num)  // now this will push all the no. > 4 in arrary forEach_arr
      }
}) 
console.log(forEach_arr)





