// function sayName(){
//     console.log("H");
//     console.log("E");
//     console.log("L");
//     console.log("L");
//     console.log("O");
    
// }
// // sayName()

// // function addTwonumbers(a, b,){
// //     console.log(a+b);
    
// // }
// // addTwonumbers(12,null)

// function addTwonumbers(number1,number2){
//     // let result = number1 + number2
//     // return result
// // console.log("jayjishor");

//     return number1 + number2

    
// }
// const result = addTwonumbers(12,44)

// // console.log(result);


// function loginUserMessage(username){
//     if (username === undefined) {
//       console.log("please enter a username");
        
//     }

//     // return'${username} just logged in'
// }
// // console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage(""))

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,1000,224,343));
 

const user = {
    username :"hitesh",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username},price is ${anyobject.price}`);
    
}
//  handleObject(user)

handleObject({
    username : "sammar",
    price :399
})

const myNewArray =[200,304,222,135]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));
