
// 1.check grades
let marks = 70;

if (marks >= 80) {
   console.log("Grad A");
   
} else if (marks >= 60) {
    console.log("Grad B");
    
} else {
    console.log("Fail");
    
}

// 2.use boolean 
let age2 = 26;
let hasCNIC = true;

if (age2 >=18 && hasCNIC==true){
    console.log("You can vote");
    
}else{
    console.log("Not Eligible to Vote");
    
}

// 3.Finding Weekend
let day = "Sunday";
if (day =="Saturday"|| "Sunday"){
    console.log("Weekend");    
}else{
    console.log("Working Day");    
}

// 4.Login using userName and password
let password = "12345678"

if (password.length >= 8) {
    console.log("Strong Password");
    
}else{
    console.log("Weak Password");
    
}
// 5.
let age3 = 61;

if (age3 >= 18) {
    if (age3 < 60){
        console.log("Adult");
        
    }else{
        console.log("Senior Citizen");
        
    }
}else{
    console.log("Minor");
}

//6 is number divisble by 5  
let number3 = 27;

if (number3 %5 ===0) {
    console.log(number3 + "is divisble by 5");  
} else{
    console.log(number3 + "is not divisble by 5");
    
}
//7 check login with username and password
let userName2 = "admin";
let password2 = "12345678";

if (userName2 === "") {
    console.log("username required");
    
}else if(password2 === "") {
    console.log( " Password is required ");
    
}else if (password2.length < 8 ){
    console.log("Password should be at leaset 8 chracters");
    
}else{
    console.log("Login Successfuly");
    
}

//8 find largest of 3 numbers
let a = 37;
let b = 45;
let c = 23;

if (a > b && a > c) {
    console.log(a + "larger than b and c");
    
} else if (b > a && b > c) {
    console.log(b + "is larger than a and c");
    
}else{
    console.log(c + "is larger than a and b");
    
}

//9 Check leap year
let year = 2024;

if (year % 4 !==0) {
    console.log(year + "is not a leap year");
    
}else if (year % 100 !== 0) {
    console.log(year + " is a leap year ");
    
}else if (year % 400 === 0) {
    console.log(year + " is a leap year ");
    
}else{
    console.log(year +"not a leap year ")
}

//10 Traffic light system (Red / Yellow / Green)
let light = "Green";
if (light === "red") {
    console.log("Stop");
    
}else if(light === "yellow") {
    console.log("Ready");
    
} else if (light === "Green") {
    console.log("Go");
    
}else{
    console.log("invalid Color");
    
}

