// Functions                      11-16-2025

function mystery(a, b = 3) {
  return a * b;
}
console.log(mystery(4)); // 12

function greet(){
 console.log("Hello Rosa")
}
greet();

function greet2(name){
 console.log("Hello "+name+"!")
}
 greet2("Maria");


// Anonymous Function
const sum = function(num1, num2) {
 return num1 + num2;
}
console.log(sum(1,2));

// Arrow Function
const greeting = (name) => {
  console.log("Hello "+name+"!")
}
 greet2("Rosa Maria");

// Global Scope Variables
let globalVar = "I am a global variable"

function printGlobVar (){
 console.log(globalVar);
}
printGlobVar();

// Local Scope
function greet(){
 console.log("Hello, local scope")
}
greet() // "Hello, local scope.")
 console.log(message) // This will throw an error
 
 // Bloack Scope
 if(true){
  let varBlock = "I'm in a block";
  console.log(varBlock); // "I'm in a block!"
 }
console.log(blockVar) // this will throw an error


 let x = 10;

function printX() {
    let x = 20;
    console.log(x);
}

printX();
console.log(x);  // error

if (true) {
    let blockVar = "Hello";
}
console.log(blockVar); // null