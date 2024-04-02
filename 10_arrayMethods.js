// thesea re javascript functions to help use work with data in an array

const users = [ "brian", "joseph" ]

console.log(users);

users.push("joy") // push methods adds elements to end of the array

console.log(users);
users.pop() // remove the last element of the array
users.pop() // remove the last element of the array
console.log(users); 

// shift and unshift methods

users.push("vincent") 
users.push("alvin") 
users.push("calvin") 
users.push("josphine") 
users.push("albert") 
console.log(users);
// sort
console.log( users.sort() );

console.log(users.includes("joy"));

users.forEach( function appendPrefix(name){
    console.log( "admin-"+name );
} )
// a higher order function
// a callback function
console.log(users);
console.log( users.reverse() );

console.log( users.some(user=>user.includes("b")))
