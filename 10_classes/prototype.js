let myName = "Hitesh"
let channelName = "Chai"

console.log(myName.trueLength);

let Heros =["Thor","Spiderman","Batman"]

let heroPower ={
    Thor: "hammer",
    Spiderman: "sling",
    Batman:"pan",

    getSpidrPower: function(){
        console.log(`spidy power is ${this.Spiderman}`);
        
    }
}
Object.prototype.prithvi = function(){
    console.log(`Prithvi is present i all object`);
    
}
heroPower.prithvi()



// Inheritance

const user = {
    username:"Babu Saheb",
    email: "saheb@babu.com"
}

const Teacher ={
    mankeVideo: true
}

const TeachingSupport ={
    isAvailable: true,
}

const TASupprot ={
    makeAssignment: true,
    ISLoggedIn: false,
    fullTime: false,
    __proto__: TeachingSupport
}
Teacher.__proto__ = user
 
// modern syntax
Object.setPrototypeOf(Teacher,TeachingSupport)

let anotherUsername ="ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is:${this.trim().length}`);
    
}

anotherUsername.trueLength()
"PrithviRaj".trueLength()
"HotTea".trueLength()