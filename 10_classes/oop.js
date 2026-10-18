// Objects Literal
// const user ={
    // username: "Prithvi Raj",
    // isLoggedin: 8,
    // SignedIn : true,
    // getUserDetails: function(){
        // console.log("give mee the information about user from database");
        // console.log(`username: ${this.username}`);
        // console.log(this);
        
        
    // }
// }
// console.log (user.username);
// console.log(user.getUserDetails());
// console.log(this);

function user(username,isLoggedin,isSignIn){
    this.username = username;
    this.isLoggedin = isLoggedin;
    this.isSignIn= isSignIn;

    // return this
}
const userOne = new user("Ramesh",3, true)
const userTwo = new user("rajkumar",2, true)

console.log(userOne);
console.log(userTwo);
