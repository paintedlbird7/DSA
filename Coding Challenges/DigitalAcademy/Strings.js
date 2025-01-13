let name = "Rosa"
name += " Perez"
console.log(name)

let str1 = "Hello"
let str2 = " World"
let result =str1.concat('', str2)
console.log(result)

let greeting = "hello";
console.log(greeting[4]);

let firstTwo = greeting[0]+greeting[1];
console.log(firstTwo);    

console.log(greeting[greeting.length-1]);

let poem = "Roses are Red\nViolets are blue\nJavascript is fun\nand so are you"
console.log(poem)

let statement = "She said,\"Hello!\"";
console.log(statement);




let name = "Alice"
console.log( `Hello, ${name}!`)

let age = 25;
console.log("My name is "+name+" and I am "+age+" years old.");

let poem = `Roses are Red,
            Violets are Blue,
            They are beautiful,
            And so are You.`
console.log(poem);

let sentence = "JavaScript is awesome!"
let position = sentence.indexOf("is");
console.log(position)

// let userName = prompt("What is your name", "Guest");

let age = prompt("How old are you?");
if (age !== null) {
    console.log("You are " + age + " years old");
} else {
    console.log("User cancelled the prompt.");
} 

// increment
let num = 0;
function increment(){
 num++
}
increment();
console.log(num); // 1








    
    
