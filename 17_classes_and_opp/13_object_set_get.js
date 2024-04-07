const user = {
    _email:"h@hc.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value 
    }
}


const tea = Object.create(user) //create an object on the basis of Useer and store it in tea

console.log(tea.email);



