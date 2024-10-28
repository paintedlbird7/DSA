function checkIfPangram(sentence) {   // Function to check if given sentence is pangram
    const seen = new Set();     // Create a set to store unique characters
    for(let i=0; i<sentence.length; i++) {     // Iterate over each character using a normal for loop
      const currChar = sentence[i].toLowerCase();       // Convert the current character to lowercase
      if (/[a-z]/.test(currChar)){
        seen.add(currChar);    // Add the character to the set
      }
    }
    return seen.size === 26; // Return true if set size is 26 (total number of alphabets)
  }
  
  console.log(checkIfPangram("TheQuickBrownFoxJumpsOverTheLazyDog"));
  
  
  
  