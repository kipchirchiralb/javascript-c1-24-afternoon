// in js data can be categorised in two groups - 

// 1. simple/primitive data types - number, string, boolean, undefined, null

// 2. complex data types -  objects, arrays, functions

// we can use the typeof operator to check data types
// = sign is called an assignment operator
let age = 90.64677384348
let ageTwo = 'yhfshbsj6323272@64'
let isOld = true
let total = null // *
let email

console.log( typeof age )
console.log( typeof ageTwo )
console.log( typeof isOld )
console.log( typeof null )
console.log( typeof email )


//object  - named group of related data
let car = {
    type: "Subaru",
    model: "Forester",
    year: 2013,
    color: "blue",
    japanese: true
}
// array --zero indexed group of related data
let colorsList = ["red", "blue", "yellow","black"]
//function - reusable bloc of code
function closeApp(){
    console.log("Closing Application!!!");
}
// to use the function, we call/invoke it
closeApp()
closeApp()
closeApp()
closeApp()
closeApp()

// paradigms
// variable name rules and variable naming conventions