//  a method is a function built into an object

let car = {
    model: "imprezza",
    year: 2012,
    start: (key)=>{
        console.log("Using key: "+key);
        console.log("Vrooom!!!");
    },
    stop: function (){
            console.log("turn off the car");
    }
}
// start is a method/function that belongs to the car object
//to call/invoke the start methid we use the dot notation
car.start("8989")
car.stop()
console.log("hsdb")
// Javascript has built in objects(global objects) that have methods too
// Examples of global objects include String, Object, Array, Date, Math, console, 
console.log( Math.PI.toFixed(3) );
console.log( "albert".toLocaleUpperCase() );
console.log( new Date().toLocaleDateString());

console.log( Math.random()*13 );
let num1 = 90
let num2 = 99
let num3 = 29
console.error("ygfsyfsyfgysg")

// explore array and string methods
