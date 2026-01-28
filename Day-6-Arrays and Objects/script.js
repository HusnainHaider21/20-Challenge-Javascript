// Array + Object 
// 🟢 Problem 1: Print All Student Names
let students = [
    {name : "Ali" , marks : 75},
    {name : "Ahmed" , marks : 32},
    {name : "Sara" , marks : 88 },
    {name : "Husnain" , marks : 40}
];

for(let i = 0; i < students.length; i++){
    console.log(students[i].name);   
}

// 🟢 Problem 2 (After That): Find Failed Students
for(let i = 0; i < students.length; i++){
   if (students[i].marks < 40) {
    console.log(students[i].name + " is failed");
    
   }
}

// 🟡 Problem 3: Add Result (Pass / Fail)
for(let i = 0; i < students.length; i++){
    if (students[i].marks >= 40) {
        students[i].result === "pass";
    } else {
        students[i].result === "fail";
    }
}
console.log(students)

// Filter students who failed or passed using loops
let passedStudents = [];

for(let i = 0; i < students.length; i++){
    if (students[i].marks >= 40) {
        passedStudents.push(students[i]);
    }
}
console.log(passedStudents);

let failedStudents = [];
for(let i = 0; i < students.length; i++){
    if (students[i].marks < 40) {
        failedStudents.push(students[i])
    }
}
console.log(failedStudents);
// 🟡 Problem 4: Filter students who failed or passed using filter method
let passedStudentsFilter = students.filter (function(students){
   return students.marks >= 40 ;
});
console.log(passedStudentsFilter);

let failedStudentsFilter = students.filter (function(students){
 return students.marks < 40 ; 
});
console.log(failedStudentsFilter);

