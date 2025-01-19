// Event Listeners
// ToDo: Review

// Add an event listener to the button with the generate-greeting ID. When the button is clicked, trigger the sayHello() function.
// Define the sayHello function
function sayHello() {
    console.log("hello!");
  }
  
  // Add the event listener to the button
  document.getElementById("generate-greeting").addEventListener("click", sayHello);
  
  // Instead of a pre-generated greeting, let’s get a bit fancier and add a text input that allows users to log whatever is on their mind! 
  // When the user clicks the button with the ID of generate-message, log the value the user has typed into the input field. 
  // Add the event listener to the button
  document.getElementById("generate-message").addEventListener("click", function () {
    // Get the value of the input field
    const userInput = document.getElementById("user-input").value;
  
    // Log the user's input
    console.log(userInput);
  });
  
  // There’s always more to do when it comes to programming! In this code challenge, users should be able to fill in the input field, click the button, and have their text added to the list as a new item.
  
  // When the user clicks the button with the ID of generate-todo, grab the value from the input with the ID of new-todo. Store the input value as the text of a new list item and append that new item to the unordered list with the class of todos.
  // Add an event listener to the button
  document.getElementById("generate-todo").addEventListener("click", function () {
    // Get the value from the input field
    const todoValue = document.getElementById("new-todo").value;
  
    // Check if the input is not empty
    if (todoValue.trim() !== "") {
      // Create a new list item
      const newListItem = document.createElement("li");
      newListItem.textContent = todoValue;
  
      // Append the new item to the list
      document.querySelector(".todos").appendChild(newListItem);
  
      // Clear the input field
      document.getElementById("new-todo").value = "";
    } else {
      console.log("Please enter a valid to-do item.");
    }
  });  