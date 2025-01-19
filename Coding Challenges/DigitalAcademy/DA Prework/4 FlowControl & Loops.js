// Control Flow

const assignmentsCompleted = 0.70;
if (assignmentsCompleted > .80) { 
 console.log("Ready to graduate!"); 
} else { 
 console.log("Better catch up on your homework!"); 
}

const assignmentsCompleted2 = 0.90;
if (assignmentsCompleted2 > .80) { 
 console.log("Ready to graduate!"); 
} else if (assignmentsCompleted2 > .65) { 
 console.log("Better catch up on your homework!"); 
} else {  
 console.log("You've got a lot of work left to do!"); 
}

//For Loop
function loop() {
 for (let i = 0; i < 10; i++) { 
  console.log(i); 
 }
}
loop(); // Call the function to execute the loop

// While Loop
function loop2() {
let number = 0; 
while (number < 5) {
 console.log(number); // Log the current value of `number`
 number = number + 1; 
 }
} 
loop2(); 

//• Determining Which Loop to Use • If you know how many times     the loop should execute, use a for loop 
//   • If you know when the loop should stop, but not how many         times it should run, use a while loop

// Loose & Strict Equality   
// "4" == 4; // true
// 5 == 4; // false
// "4" === 4; // false
// 4 === 4; // true
// "4" !== 4; // true
// 4 !== 4; // false

const temperature = 50;
if (temperature > 80) { 
 console.log("no need for a jacket"); 
} else if (temperature < 55) { 
 console.log("wear a jacket"); 
}

const weather = 50;
if (temperature < 60) { 
 console.log("Wear a coat!"); 
} if (weather === "raining") { 
 console.log("Bring an umbrella!"); }

if(temperature === "cold" &&  windSpeed > 10){
    console.log("Time for the windbreaker!");
}

function checkIfBuckledUp(userIsBuckled){
 if (userIsBuckled === true){
  console.log("You deserve a safe driver discount!")
 } else if (userIsBuckled === false){
  console.log("Click it or ticket!")
 }
}
 // It will either be true or false
// Call the function with an argument
checkIfBuckledUp(true);  // Output: You deserve a safe driver discount!
checkIfBuckledUp(false); // Output: Click it or ticket!

function negotiate(price){    
    // The price variable will be a number
  if (price < 5){
   console.log("I'll take it!")
  } else if (price > 10){
   console.log(""+price+" for this? You must be joking!")
  }else{
  console.log("Take off 10% and you've got a deal.")
 }
}

negotiate(11);

function echoChamber(){
  for(let i=0;i<3;i++){
   console.log("Hello")
 }
}
echoChamber();

const cookies = ["chocolate chip", "gingersnap", "oatmeal raisin", "shortbread"];
for (let i = 0; i < cookies.length; i++) {
    console.log(cookies[i]);
}

const characters = ["Garnet", "Amethyst", "Pearl", "Steven"];
function rollCall(){
 for (let i=0; i<characters.length; i++){
  console.log(characters[i]);
 }
}
// Call the function
rollCall();

let number = 0;
while (number < 11) {
   console.log(number); // Log the current value of number
    number = number + 1; // Increment number by 1
}

//  x Infinite Loop! x
// let number = 10;
// while (number < 500) {
//     number = number - 1;
// }

let investment = 1000; // Initial investment amount
for (let year = 1; year <= 10; year++) {
  if (year === 7) {
    // Year 7: Investment loses 75%
    investment -= investment * 0.75;
  } else {
    // Other years: Investment increases by 10%
    investment += investment * 0.10;
  }
  console.log(`Years: ${year} Value: ${investment.toFixed(2)}`);
}