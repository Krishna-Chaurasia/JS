// forEach loop :: 
console.log("\nUsing forEach loop on array \n ")

const coding = ['js','ruby', 'java', 'python', 'cpp']


// within forEach() parenthesis we need to give callback function without its name 
// inside forEach loop(the function(item)) will contain parameters of all values of array(coding) e.g js, ruby,java etc.

coding.forEach( function (item) {
     console.log(item)
} ) 

// Arrow Function :: greet = () => {  } 

console.log("\n forEach loop on arrow function \n");
coding.forEach( (item) => {
    console.log(item)
} ) 


console.log("\n Creating function outside not within forEach loop \n");

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);

console.log("\n Creating function(item, index, arr) forEach loop \n");

coding.forEach( (item, index, arr) => {  // using these arguments we will get item, its index and full array
    console.log(item ,index, arr); 
})


console.log("\n Creating multiple objects inside a array \n");

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

// In database, all data comes in the form of array and each value of array is a object

myCoding.forEach((item) => {
    console.log(item.languageName);  // or just item 
})


