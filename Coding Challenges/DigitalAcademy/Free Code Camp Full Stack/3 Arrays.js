// Arrays

// Push or add to the end
const fruits = ["apple", "banana"]
const newLength = fruits.push("orange");
console.log(newLength); // 3
console.log(fruits); // ["apple", "banana", "orange", ]

// Pop or subtract to the end 
let fruits2 = ["apple", "banana", "orange"];
let lastFruit = fruits2.pop();
console.log(fruits2); // ["apple", "banana"]
console.log(lastFruit); // ["orange"]

// Unshift add elements to beginning of array & returns the length 
let numbers = [2,3];
let newLength2 = numbers.unshift(1); 
console.log(numbers); // [1, 2, 3]
console.log(newLength2) // 3

// Shift removes from the beginning of the array
// .....

// examples
let arr = [1, 2, 3];
arr.push(4);
arr.unshift(0);
console.log(arr);  

let arr2 = ['a', 'b', 'c', 'd'];
let first = arr2.shift();
let last = arr2.pop();
console.log(first, last, arr2);

let arr3 = ['a', 'b', 'c'];
arr.unshift('x', 'y');
arr.pop();
console.log(arr3);

// Arrays Part 2

// includes method
let fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grapes")); // false

// Split
let str = "hello"
let charArray = str.split('');
console.log(charArray);

let charArray2 = ["h","e","l","l","o"];
charArray2.reverse();
console.log(charArray2)

let reversedArray = ["o","l","l","e","h"];
let reversedString = reversedArray.join('');
console.log(reversedString)