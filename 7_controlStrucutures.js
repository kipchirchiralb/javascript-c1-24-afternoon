// Control structures allow us to control the flow of execution of our code. 

// by default , code is executed is sequence(line after line from top)

// we can execute a block(multiple lines) of code conditionally or repeatedly using control structures

// conditional structures include `if else` statements , `switch` statements, the ternary operator
// repeating/iteration/looping control structures include `for` loop, `while` loop, `do while` loop
let mark = 54

if(mark<0 || mark>100 || typeof mark !== "number"){
    console.log("Invalid mark!!");
}else{
    if(mark<50){
        console.log("Comment: Fail" );
    }else{
        console.log("Comment: Pass");
    }
    if(mark<40){
        console.log("Grade: E");
    }else if(mark < 50){
        console.log("Grade: D");
    }else if(mark < 60){
        console.log("Grade: C");
    }else if(mark<70){
        console.log("Grade: B");
    }else{
        console.log("Grade: A");
    }
}
// make this code reject a negative value or a mark more than 100
// use OR logical operator



// build a grading system using the switch statement

// while
let totalStudents = 24
let currentStudent = 1

while(currentStudent<=totalStudents){
    console.log("Generating Report!");
    console.log("Student number: " + currentStudent);
    console.log("Report Done!!");
    currentStudent = currentStudent + 1
}

console.log("Doing somethins else");




for(currentStudent=1; currentStudent<=totalStudents; currentStudent = currentStudent+1){
    console.log("Generating Report!(for loop)");
    console.log("Student number: " + currentStudent);
    console.log("Report Done!!");
}



//  for(initialCounter; condition; update) { code }