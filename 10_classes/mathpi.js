const Ramesh =  Object.getOwnPropertyDescriptor(Math,"PI")
    console.log(Ramesh);
    
const chai = {
    name :"ginger tea",
    price : "50",
    isAvailable : true,

    orderChai:function(){
    console.log("chai nhi bani");
    
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai,"price"));

Object.defineProperty(chai, "name",{
    // writable : false,
    enumable : false,
    // configurable : true
})

for (const [key,value] of Object.entries(chai)) {
   if (typeof value !== `function`) {
    console.log(`${key}:${value}`);
   }
    
    
}