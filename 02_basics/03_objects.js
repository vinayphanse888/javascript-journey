// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Vinay",
    "full name": "Vinay Phanse",
    [mySym]: "mykey1",
    age: 20,
    location: "Mumbai",
    email: "vinay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

// JsUser.email = "vinay@chatgpt.com"
// Object.freeze(JsUser)          // freeze() function It will lock the value 
// JsUser.email = "vinay@microsoft.com"
// console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());