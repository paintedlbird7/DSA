// Higher Order Functions & Callbacks

// Hoisting
//Hoisting in JavaScript is a behavior where variable and function declarations are moved 
// to the top of their scope before code execution
//eclarations are hoisted, not initializations
sayHello(); // Hello World
function sayHello(){
 console.log("Hello world");
}

// Closures
function outerFunction(x) {
    let y = 10;
    function innerFunction() {
     console.log(x+y)
    }
    return innerFunction;
   }
   let closure = outerFunction(5);
   closure() // 15



