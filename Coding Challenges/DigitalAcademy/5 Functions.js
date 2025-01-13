// Functions

function sayHello() {
    console.log("Hello!");
}
sayHello();

function sing(){
 console.log("I will always love you") 
}
sing()

function helloThere(name){
  console.log("Hello "+name+"!")
}
helloThere("Rosa")

function multiply(a, b){
 return a * b
}
console.log(multiply(1,1))   // 1

// function calculateTotal(price, salesTaxRate) {
//    return (price + (price * salesTaxRate));
// }

// function calculateTotal(price, salesTaxRate) {
//   const totalAmount = price + (price * salesTaxRate); // Calculate total
//   return totalAmount; // Return the total amount
// }// // Log the total with proper formatting
// console.log("The total is $" + calculateTotal(4.50, 0.10).toFixed(2));


// function calculateTotal(price, salesTaxRate) {
//    const totalAmount = price + (price * salesTaxRate);
//    console.log("The total is $" + totalAmount);
// }
// console.log(calculateTotal(4.50, .10));



// Define a player object
const player = {
  health: 10,
  damageTaken: 0,
  points: 1000,
};

function takeDamage() {
    player.health -= 1;
    player.damageTaken += 1;
    player.points -= 100;
}

// Call the function and log results
takeDamage();
console.log("Player Health:", player.health); // Access the health property of the player object
console.log("Player Damage Taken:", player.damageTaken); // Access damageTaken
console.log("Player Points:", player.points); // Access points
