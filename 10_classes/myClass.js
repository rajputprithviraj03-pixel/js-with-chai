// class User{
//     constructor(username,email,password){
//     this.username = username,
//     this.email = email,
//     this.password = password
//     }


// encryptPassword(){
//     return `${this.password}abc`
// }
// changeUsername(){
//     return `${this.username.toUpperCase()}`

// }

// }
// const chai = new User("chai", "code@gmail.com", "9838")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());
 
// Behind the scene

function user (username,password,email){
    this.username = username
    this.password = password
    this.email = email
}

user.prototype.encryptPassword = function(){
        return `${this.password}abc`

}

user.prototype.changeUsername = function(){
    return `${this.changeUsername.toUpperCase}`
}
const tea = new user("tea", "76543", "sutta@chaiwla.com")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

