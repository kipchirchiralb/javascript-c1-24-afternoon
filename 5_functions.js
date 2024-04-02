//  functions are resuable blocks of code
// {} -- block
// defining a function --- two ways

// regular function
function calculateAge(year){
    console.log( 2024 - year );
}
// arrow function
const covertMetersToCentimeters = (heightInMeters)=>{
    console.log( heightInMeters * 100 );
}

// to use the code inside the function, we call/invoke the function with arguments if needed
calculateAge(2005)
calculateAge(1920)
covertMetersToCentimeters(3.45)

 function convert(number, fromUnit, toUnit){
    //  code make decisions on which formula to use -
    console.log("Converting " + number + " from " + fromUnit +" to " + toUnit );
 }

 convert(1250, "ksh", "usd")

 convert(50, "deg", "F")

 convert(12, "cm", "m")

 function scream(){
    console.log("hgfdabkanjfndsafnkajnfkjnj");
    console.log("hgfdabkanjfndsafnkajnfkjnj");
    console.log("hgfdabkanjfndsafnkajnfkjnj");
    console.log("hgfdabkanjfndsafnkajnfkjnj");
 }

 scream()
 scream()
 scream()