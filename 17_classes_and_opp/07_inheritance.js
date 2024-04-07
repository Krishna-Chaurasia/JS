
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
//class Teacher extends User{}: all functionlity of User class availble to Teacher Class
class Teacher extends User{
    constructor(username,email,password){
 super(username)//will go to User call with username; in 05_calls, we need to give global this; but super()don't need here
    this.email = email;
    this.password = password
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai","chai@teacher.com","1223");
chai.addCourses()  
chai.logMe()

const masalaChai = new User("masalaChai")

//masalaChai.addCourses() // it do not have access to addCourese which is in Teacher Class because User didn't
                          // inherit the property of Teacher class

masalaChai.logMe()

console.log(chai === masalaChai) //o/p : false 
console.log(chai === Teacher) //o/p : false 
console.log(chai instanceof Teacher) //o/p:true; which means if chai is made from Trecher of not, if made then true

console.log(chai instanceof User) //o/p:true; chai check instance of instance 

