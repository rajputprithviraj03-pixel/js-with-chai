class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }
    get email (){
        return  this._email.toUpperCase()
    }
    set email(value){
        this._email = value.toUpperCase()
    }
    get password (){
        return `${this._password} babu`
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}
const Rajput = new User("prithviraj@ai mail", "abcd")
console.log(Rajput.email);
console.log(Rajput.password);
