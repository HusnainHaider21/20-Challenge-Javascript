// Javascript Methods
// 1. filter method 
let students = [
    {name : "Ali" , marks : 75},
    {name : "Ahmed" , marks : 30},
    {name : "Husnain" , marks : 87},
    {name : "Sara" , marks : 40},
]
// Problem.1 Filter students who pass or fail using filter method
let passedStudents = students.filter (function(s){
   return s.marks >= 40;
});
console.log(passedStudents);

let failedStudents = students.filter (function(x){
    return x.marks < 40;
});
console.log(failedStudents);

// Mini Project Idea: Student Results List

// Goal:

// Show only passed students

// Show their names and marks + pass/fail message
let passedStudentsFilter = students.filter (function(student){
    return student.marks >= 40;
});

let displayPassed = passedStudentsFilter.map (function(student){
    return student.name + " scored " + student.marks + " and Passed "; 
});
console.log("Passed Students:");
console.log(displayPassed);

// now show failed students
let failedStudentsFilter = students.filter (function(student){
    return student.marks < 40;
});

let displayFailed = failedStudentsFilter.map (function(student){
    return student.name + " scored " + student.marks + " and Failed ";
});
console.log("Failed Students:");
console.log(displayFailed);


