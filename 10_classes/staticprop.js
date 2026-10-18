class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is:${this.username}`);
        
    }
    createId(){
     return `543212`
    }
}

const prithvi = new User("I Love You")
// console.log(prithvi.createId());
// console.log(prithvi.logMe());


class Teacher extends User {
    constructor(username,email){
       super(username)
        this.email = email
    }
}
const bjp = new Teacher("janta","party@gmail.com")
console.log(bjp.createId());
