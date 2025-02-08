// Higher Order Functions & Callbacks

// Hoisting
sayHello(); // Hello World
function sayHello(){
 console.log("Hello world");
}

// Closures
// Closure
function outerFunction(x) {
    let y = 10;
    function innerFunction() {
     console.log(x+y)
    }
    return innerFunction;
   }
   let closure = outerFunction(5);
   closure() // 15



