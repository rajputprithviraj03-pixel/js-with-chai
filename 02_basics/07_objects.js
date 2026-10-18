// // const tinderUser = new Object() //singlton object

// const tinderUser = {} // non-singlton object

// tinderUser.id = "123rdfvb"
// tinderUser.name = "sandey "
// tinderUser.isLoggegIn = false

// // console.log(tinderUser);

// const regularUser = {
//     email : "sammy@google.com",
//     fullname:{
//         firstname: "babu ",
//         lastname:"saheb"
//     }
// }
// //  console.log(regularUser.fullname);
//   const obj1 = {1:"a", 2:"b", 3:"c"}
//   const obj2 = {4:"a", 5:"b", 6:"c"}

// //   const obj3 = Object.assign({}, obj1,obj2)
// const obj3 = {...obj1,...obj2}
// //   console.log(obj3);
  
// const users = [ 
//     {
//         id : "Rajveer",
//         email : "veer@gmail.com",
//     },
//     {
//         id : "Rajveer",
//         email : "veer@gmail.com",
//     },
//     {
//         id : "Rajveer",
//         email : "veer@gmail.com",
//     },
//     {
//         id :"Rajveer",
//         email : "veer@gmail.com",
//     },
//     {
//         id : "Rajveer",
//         email : "veer@gmail.com",
//     },
// ]
// users[1].email,
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price :"999",
    courseInstructor : "hitesh",

}
 
// console.log(course.courseInstructor);

const {courseInstructor : instructor } = course

console.log(instructor);

