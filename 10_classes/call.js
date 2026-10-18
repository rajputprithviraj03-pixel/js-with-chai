function setUsername(username){
    // complex DB calls
    this.username = username
}
function createUser(username,email,password){
setUsername.call(username)

    this.email = email
    this.password = password
}
const chai = new createUser("Chai","chai@facebook.com",5432)
console.log(chai);

