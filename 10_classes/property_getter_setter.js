function User(email,password){
    this.email = email
    this.password = password

Object.defineProperty(this,'email',{
    get:function(){
    return `${this._email}papa`
    },
    set: function (value){
     this._email =  value.toUpperCase()  
    }
})

}
    
const tea = new User("tea@tea,com", "chai")
console.log(tea.email);
