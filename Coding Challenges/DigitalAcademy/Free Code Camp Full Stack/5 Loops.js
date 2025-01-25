// Loops
// Log up to 5
// for (i = 0; i < 5; i ++) {
//  console.log(i);
// }
// // 0, 1, 2, 3, 4

// for (let i = 2; i <= 6; i += 2) {
//   console.log(i);
// }
// //  2, 4, 6

const numbers = [1,2,3,4,5]

for(num of numbers) {
 console.log(num);
}
// 1, 2, 3. 4, 5

const str = 'freecodecamp';

for(let char of str) {
 console.log(char);
}
//print each letter in a string

const people = [
 { name: "John", age: 30},
 { name: "Jane", age: 25},
 { name: "Jim", age: 40},
]

for(const person of people) {
 console.log(`${person.name} is ${person.age} years old`)
};

const colors = ['red', 'green', 'blue'];
for (const color of colors) {
  console.log(color);
}

const fruits = ['apple', 'banana', 'cherry'];
for (let fruit of fruits) {
  console.log(fruit.toUpperCase());
}

// for in loop in an object
const fruit = {
 name: "apple",
 color: "red",
 price: 0.99
}

for(const prop in fruit){
 console.log(fruit[prop])
}
// "apple", "red", 0.99

//nested object
const person = {
 name: "John",
 age: 30,
 address: {
  street: "123 Main St",
  city: "Anytown",
  state: "CA"
 }
};
for(const prop in person){
 console.log(person[prop]); 
}
// John,
// 30,
// {street: "123 Main St", city: "Anytown", state: "CA"}

let userInput = prompt("Please enter a number between 1 and 10");

while (isNaN(userInput) || Number(userInput) < 1 || Number(userInput) > 10 ){
 userInput = prompt("Invalid input.  Please enter a number between 1 and 10");
}
alert("You entered a valid number");