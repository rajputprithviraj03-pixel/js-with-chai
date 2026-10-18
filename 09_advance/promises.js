const promiseOne = new Promise(function(resolve,reject){
    //Do yourr async work
    //can call DB, cryptography,network
    setTimeout(function(){
    console.log('Async is completed');
    resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async is work two");
        resolve()
    },1000)
}).then(function(){
    console.log("Async is completed");
     
})
const promiseThree = new Promise(function(resolve,reject){

    setTimeout(function(){
    resolve({username:"Aalu", email: "apna@example.com"})
    
},1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})
const  promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
           resolve({username:"Prithvi, password:1234"})

        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})
 promiseFour
 .then((user) =>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
    
})
.catch(function(error) {
    console.log(error);
    
}).finally(() => console.log("The promise is either resolvsd or rejected")
 )
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username:"Programming", pasword:"6543"})
        } else {
            reject('ERROR: JS went wrong')
        }
    })

})
 async function  consumePromiseFive(){
    try {
        const respone =await promiseFive
    console.log(respone);
    } catch (error) {
        console.log(error);
        
    }
    
 }
 consumePromiseFive()

 async function getAllUsers() {
  try {
      const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log("ERROR:Data is not found");
    
  }
    
 }
 getAllUsers()
 fetch('https://api.github.com/users/hiteshchoudhary')
 .then((response) => {
    return response.json()
 })
 .then((data) => {
    console.log(data)
 })
 .catch((error) => console.log(error))