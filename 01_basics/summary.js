// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt.

const score = 100
const scoreValue = 100.45

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);
const bigNumber = 7875358734876138746n




// JavaScript is a Dynamically typed language. Because data type will automatically 
// assigned at the time of compilation or code execution.

// Reference type (Non Primitive) 

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];

let myObj = {              // objects
    name : "Vinay",
    age : 22,
}

const myFunction = function() {
    console.log("Hello World");
}

// console.log(myFunction);


// *******************************************

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Vinay"

let anotherName = myName           // It initialise the copy of myName not the original value
anotherName = "VinayPhanse"

console.log(myName);
console.log(anotherName);

let userOne = {                     // It goes to heap memory It change the original value
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "vinay@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


