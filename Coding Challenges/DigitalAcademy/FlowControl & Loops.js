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

// For Loop
// function loop() {
//  for (let i = 0; i < 10; i++) { 
//   console.log(i); 
//  }
// }
// loop(); // Call the function to execute the loop

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
 // • If you know when the loop should stop, but not how many         times it should run, use a while loop

