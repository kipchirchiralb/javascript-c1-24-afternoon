//  Higher Order Functions are functions that take in other functions as arguments or return a function

function fOne( username, anotherFunc ){
    console.log( "Welcome "+ username );
    anotherFunc(username)
}

function fTwo(name){
    console.log("Doing Some task for "+name);
    console.log("Done!!");
}
// fTwo("albert")
fOne("albert", function validateEmail(){
    // regular expressions -- validating text e.g email
    console.log("Email is valid!!!");
} )

fOne("Vincent", fTwo)


function one(){
    console.log("running f one");
    return function (){
        console.log("running the returned function!");
    }
}

one()()