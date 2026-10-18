// object literals

const mySym = Symbol("key1")

const new_user = {
    name : "Prithvi",
   "Fullname":"Prithvi Raj",
   [mySym] : "key1",
    age : 18,
    location:"Bihar",
    email : "prithvi@google.com",
    isLoggedin :false,
    lastLoggeedin : ["monday", "tuesday", "friday"]
}

// console.log(new_user.email);
// console.log(new_user["age"]);
// console.log(new_user["Fullname"]);
// console.log( new_user[mySym]);

new_user.email = "prithvi@microsoft.com"
Object.freeze(new_user)
new_user.email = "hitesh@chatgpt.com"
// console.log(new_user);

new_user.greeting = function(){
    console.log("Hello BHAIYO");
    
}
console.log(new_user.greeting);
