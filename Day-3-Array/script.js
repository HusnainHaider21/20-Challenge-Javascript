// Topic: Array 
// // Task: 1
// 1️⃣ Create array of 5 numbers
// 2️⃣ Print all numbers using loop
// 3️⃣ Change 3rd value
// 4️⃣ Print length of array

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++){
    numbers[2] = 7;
      console.log(numbers[i]);
      
}
// Array Methods 
// 1:Push 
// Push is a methode of Array which is used to add value at the end of the Array
let fruits = ["apple", "banana"];
fruits.push("Mango")
console.log(fruits);

// 2:Pop
// Pop is a methode of Array which is used to remove value at the end of the Array.
let colors = ["red", "green" , "blue"]
colors.pop();
console.log(colors);

// 3:Unshift
// Unshift is a methode of Array which is used to add value at the start of the Array.
let students = ["ali", "hassan"];
students.unshift("Husnain");
console.log(students);

// 4:shift
// shift is a methode of Array which is used to remove value from the start of the Array.
let alphabets = ["a" , "b", "c"];
alphabets.shift();
console.log(alphabets);

let numbers2 = [10, 20, 30];
numbers2.push(40);
console.log(numbers2);

numbers2.pop()
console.log(numbers2);

numbers2.unshift(5);
console.log(numbers2);

numbers2.shift();
console.log(numbers2);



