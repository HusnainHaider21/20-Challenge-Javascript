// OBJECTS
let car = {
    brand : "toyota",
    model : "corola",
    year : 2020,
    color : "black"
};
console.log(car.brand);

// Loops in Object

let userForm = {
    username: "husnain",
    email: "",
    password: "123456",
    country: ""
};
for (let key in userForm){
    if (userForm[key] == "") {
       console.log( key + " is required");   
    }
}

let student = {
    math : 75,
    english : 40,
    science : 82,
    urdu : 33
};

for(let key in student){
    if (student[key] < 40 ) {
        console.log(key + " is failed");
        
    }
}



