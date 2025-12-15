const name = "vinay"
const repoCount = 5
// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('vinay')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

// const newString = gameName.substring(0, 3)              // It excludes index 3 value
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)            // It also take negative value
// console.log(anotherString);

// const newStringOne = "   Vinay    "
// console.log(newStringOne);
// console.log(newStringOne.trim());             // trim() It trims the starting and ending spaces

const url = "https://vinay.com/vinay%20phanse"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))   // It is not available in string url

console.log(gameName.split('-'));