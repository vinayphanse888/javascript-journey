//sync and async kya hota hai ? 
// SYNC =====> sync matlab ek ke baad dusra hoga, jab tak ek command complete naa ho, dusra shuru nahi hoga 

// ASYNC ======> async matlab saare kaam ek sath shuru kardo, jiska answer pahle aajaye uska jawaab dedena

// kaise pata chalta hai ki hum sync code likh rahe ya async 

/*
setTimeout 
setInterval
Promise                 -------> If this are used in code It is asynchronous code
fetch
axios
XMLHttpRequest
*/

// setTimeout(function(){
    
// },1000)

// fetch
// axios
// promises
// setTimeout
// setInterval

// then catch 
// callbacks
// async await

// async js hai kya ? 
// js is not asynchronous
// async ki poori kahaani.
// single threading and multi threading 
// callbacks -------------> callback humesha ek function hota hhai, ye sirf tab chalta hai jab async code ka completion ho jata hai 
// promises 

var ans = new Promise((res, rej)=> {
    if(true){
        return res();
    }else {
        return rej();
    }
})

ans
.then(function(){
    console.log("resolve hogaya tha");
})
.catch(function() {
    console.log("reject hogaya tha");
})

// then and catch
// async await
// 5 use cases ekdum real world waale