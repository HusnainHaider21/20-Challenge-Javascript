// 🧪 PRACTICE SET (Array + Loop)
// 🟢 Problem 1: Print All Elements
let nums = [2, 5, 10, 15, 20];
for (let i = 0; i< nums.length; i++) {
    console.log(nums[i]);
    
}

// 🟢 Problem 2: Sum of Array
let sum = 0;
for(let i = 0; i < nums.length; i++) {
    sum+= nums[i];
}
console.log(sum);

// 🟡 Problem 3: Count Even Numbers
let Count = 0;

for(let i = 0; i < nums.length; i++){
if (nums[i] % 2 === 0) {
    Count++;
}
}
console.log(Count);

// Problem 4 – Multiply All by 2
for(let i = 0; i < nums.length; i++){
 nums[i] = nums[i] * 2;
}
console.log(nums);

//Problem 5 – Find Largest Number
// let arr = [11, 22, 33, 44, 55, 66];
// let largest = arr[0];
// for(let i = 0; i < arr.length; i++){
//   if (arr[i] > largest) {
//     largest = arr[i]
//   }
// }
// console.log(largest);

// Problem 6 - find Smallest Number
let arr = [11, 22, 33, 44, 55, 66];
let smallest = arr[0];
for(let i = 0; i < arr.length; i++){
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}
console.log(smallest);
