class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    // we can apply getter and setter on any variable of constructor
    //for getter use 'get' and for setter use set
    //getters and setters are automatically created as method for all the properties that we create
    
    //Note : if we define getter i.e get then we must define setter i.e set
    get password(){
       // return this.password.toUpperCase(); // same issue will arrive as that o setter(read below)
        
       return this._password.toUpperCase();
    }
    //In set : we need to give a value in setter
    set password(value){
    // here set and constructor both tries to set the value of password, so a kind of race begin 
    // between them, so error called called Maximum call stack size exceeded
    
        //this.password = value; // this will cause Maximum call stack size exceeded
    
    this._password = value.toUpperCase()
    //or
    this._password = value

    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        // we do not return setter
         this._email = value
    }
     
}
const krishna = new User("krisna@.ai","abc")
console.log(krishna.password)   
console.log(krishna.email)   





