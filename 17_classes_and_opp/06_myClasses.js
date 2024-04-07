//jaise hi class se ek object initialize hoga i.e new keyword, waise hi constructor call ho jayega automatically
//Classes features were introduced in ES6

class user{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return  `${this.password}abc` // will take value of password among 3 vairables, so use this.password
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new user("chai", "chai@gamilc.com", "123") // with new keyword constructor called and it has 3 parameters
console.log(chai.encryptPassword()); 
console.log(chai.changeusername()); 

//behind the scene or with another method

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea","tea@gmail.com","123445")
console.log(tea.encryptPassword())
console.log(tea.changeusername())