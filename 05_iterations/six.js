// const myNums = [1,2,3,]

// const newNums = myNums.reduce(function(acc,currval ) {
//    console.log(`acc: ${acc}, currval: ${currval}`);
   
//     return acc + currval;
// } , 3 )

// const newNums = myNums.reduce((acc,currval) => acc + currval )

// console.log(newNums);


const shoppingCart =[
      {
        itemName: "js course",
        price : 299
      },

      {
        itemName: "C course",
        price : 99
      },

      {
        itemName: "java course",
        price : 399
      },

      {
        itemName: "C++ course",
        price : 149
      },

      {
        itemName: " react course",
        price : 199
      },

      {
        itemName: "MERN course",
        price : 299
      },

      {
        itemName: "php course",
        price : 219
      },
]

const Total = shoppingCart.reduce((acc, item) => acc + item.price,0)

console.log(Total);
