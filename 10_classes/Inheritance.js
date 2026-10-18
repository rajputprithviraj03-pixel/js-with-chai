class User  {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);   
        
    }
}
class Teacher extends User{
    constructor(username,password,email){
        super(username)
        this.password = password
        this.email = email
    }
    addCourse (){
        console.log(` a new course was added ${this.username}`);
        
    }
}
 const chai = new Teacher("Aam", "aam@gmail.com", "32234")

 chai.logMe ()
 const masalaChai = new User("masalachai")
 masalaChai.logMe()

 console.log(chai === masalaChai);
 