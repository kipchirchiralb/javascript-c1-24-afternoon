//  an array is a orderedlist of items- the items could be of any datatype
// arrays are created using square brackets and items separated using commas
const colors = ["red","yellow","blue"]
const evenNumbers = [2,4,6,8,10,12,14]
const randomValues = [526, "albert", true, 26, ["red","green"], "alb@g.com", false, {dogName: "simba"}]

// arrays are zero-indexed, this means by default js will asign numbers to the elements of the array starting with zero for the first element
// we use bracket notation to access values in the array
// e.g. to get the first even number
console.log(evenNumbers[0]); //2
//e.g. to get the second value of random values list i.e. "albert"
let secondRandomValue = randomValues[1]
console.log(secondRandomValue);

// tasks
// 1. log the second color in colors array
let secondColor = colors[1] // "yellow"
console.log(secondColor);
// 2. log the last element/item in the randomValues array
console.log( randomValues[7] );