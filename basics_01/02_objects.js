// declaring objects using constructor  so that it forms singleton object
// const tinderUser = new Object()   // Singleton object formed from Constructor method 
// const tinderUser = {}           //  Non-Singleton object formed from Literals method

//const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

//********declaring new object **********

console.log("\nDeclaring another literal object\n")

const regularUser = {
    email: "some@gmail.com",
    //declaring another object(fullname) inside object(regularUser)
    fullname: {
             // declaring one more object(userfullname) inside object(fullname)
            userfullname:{
                firstname: "krishna",
                lastname: "chaurasia"
                
            }
    }

}

console.log(regularUser.fullname.userfullname.firstname)

//******** Combining multiple objects into single object **********

console.log("\nCombining multiple objects into single object\n")

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = { obj1, obj2, obj3} //it is not recomemded way to merge all objects,
                          // obj3 will have object inside object, same like array inside array
console.log(obj4)                          

console.log("\n Using Object.assign() method to merge different objects \n")

const obj5 = Object.assign({},obj1, obj2, obj3)  // {} is target(empyt object) and obj1, obj2 are sources

console.log(obj5)

//const obj6 = Object.assign(obj1,obj2,obj3) // obj1  is target and all other source objects obj2,obj3 are stored in obj1 and obj6
// console.log(obj1) and console.log(obj6) //will give same output


console.log("\n Using spread operator(...) i.e 3 dots to merge different objects \n")
// use this method 90% of the time
const obj7 = {...obj1, ...obj2, ...obj3} // Using spread operator(...) i.e 3 dots to merge objects, obj1, obj2, obj3

console.log(obj7)

//******* creating Objects of arrays *********
console.log("\ncreating Objects of arrays\n")
// below there are multiple objects inside the arrays
const users = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 2,
        email: "c@gmail.com"
    },
    {
        id: 1,
        email: "krishna@gmail.com"
    },
]

// ******* now accessing object's value of array********** 

users[1].email

console.log("\ndisplaying all details of object tinderUser \n"); 

console.log(tinderUser);

// accessing all keys of object tinderUser
console.log("\n accessing all keys of object tinderUser \n")

console.log(Object.keys(tinderUser)); // its datatype will be array

console.log("\n accessing all values of object tinderUser \n")
console.log(Object.values(tinderUser));  // its datatype will be array

console.log("\n accessing all entries of object tinderUser \n")
console.log(Object.entries(tinderUser));  // it will create all key: value pairs in separate arrays inside single array

console.log("\nhasOwnProperty() to check if any specific property is present in object tinderUser or not  \n")
console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // o/p : boolean




// Object Destructuring : it means renaming the key name in object to access them faster or with small name

console.log("\nUsing Object Destructuring method\n")

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Krishna"
}

// extracting values from object course

const {courseInstructor} = course   // const {which key's value to be access i.e courseInstructor} = course(i.e from which object)
console.log(courseInstructor) // we don't need to use course.courseInsturctor because of const {courseInstructor} = course

// other short way of accessing key's value from object 

const {coursename : Cname} = course // to get value of coursename, instead of using coursename we will just use Cname
console.log(Cname);
































