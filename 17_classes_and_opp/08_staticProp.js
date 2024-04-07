class User{
    constructor(username){
       this.username = username //(username) holds some value and 'this.username = username' is used to set/pass the
                               // value of username in the object
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }
    // provides id to the all username 
    createId(){
        return `123`
    }

    // provides unique id to the all username 
    static uniqueCreateId(){ // whith static keyword no one has access to this function
        return `123`
    }
}

const krishna = new User("krishna")
console.log(krishna.createId())
//console.log(krishna.uniqueCreateId())

class Teacher extends User{
    constructor(username,email){
        super(username)  //calling super constructor
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
iphone.logMe()

//console.log(iphone.uniqueCreateId()) //due to static keyword in uniqueCreateId() ; iphone which is child can't access it

