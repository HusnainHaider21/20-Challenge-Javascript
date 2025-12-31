let x = 5;
let y = 9;
let z = x+y;
console.log(z);

const a = "Husnain"
const b = "Haider"
const c = a+b;
console.log(c);

let age = 19;
if (age >= 18) {
    console.log("Adult");    
} else{
    console.log("Minor");
    
}

let number = 10;

if (number % 2 ==0) {
console.log("Even Number");

}else{
    console.log("Odd Number");
    
}

let marks = 70;

if (marks >= 80) {
   console.log("Grad A");
   
} else if (marks >= 60) {
    console.log("Grad B");
    
} else {
    console.log("Fail");
    
}

let age2 = 26;
let hasCNIC = true;

if (age2 >=18 && hasCNIC==true){
    console.log("You can vote");
    
}else{
    console.log("Not Eligible to Vote");
    
}

let day = "Sunday";
if (day =="Saturday"|| "Sunday"){
    console.log("Weekend");    
}else{
    console.log("Working Day");    
}

let password = "12345678"

if (password.length >= 8) {
    console.log("Strong Password");
    
}else{
    console.log("Weak Password");
    
}

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

// is number divisble by 5  
let number3 = 27;

if (number3 %5 ===0) {
    console.log(number3 + "is divisble by 5");  
} else{
    console.log(number3 + "is not divisble by 5");
    
}
// check login with username and password
let userName2 = "";
let password2 = "12345678";

if (userName2 === "") {
    console.log("username required");
    
}else if(password2.length>=8) {
    console.log(password2 + " is Strong Password ");
    
}else{
    console.log("Password is Weak");
    
}





