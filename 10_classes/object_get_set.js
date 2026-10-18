const User = {
    _email : 'asdf@gmail.com',
    _password : "password",

    get email(){
    return this._email.toUpperCase()
    },
    set email(value){
    this._email = value
    }
}
const chai = Object.create(User)
console.log(chai.email);
