// string methods are functions provide by javascript to help developers manipulate/work with string/text

// example. google chromes profile icon- that has a letter representing the first letter inusers name
// to achieve this in js we use a string method charAt(index)
let username = "evans"

console.log( username.charAt(0).toUpperCase() );
// strings are zero-indexed like arrays

console.log("g".toUpperCase());
console.log( username.slice(0,3) ); // 0,1,2

let names = ["victor", "james","john","brian","jane","albert"]
let result = []

// console.log(names[3]);

// console.log(names.length);

for( let index = 0; index<names.length; index++ ){
        // console.log("LOOPING: CURRENT NAME");
        // console.log( names[index].includes("b")   );
    if( names[index].includes("j") ){
        result.push(names[index])
    }
}
console.log(result);