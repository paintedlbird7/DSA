function  shortestDistance(words, word1, word2) {
    let shortestDistance = words.length; // Initialize the shortest distance with the length of the words list
    // Initialize the positions of word1 and word2 with -1
    let position1 = -1;
    let position2 = -1;

    for (let i = 0; i < words.length; i++) {
      if (words[i] === word1) { // If the current word is word1, update the position1
        position1 = i;
      }
      else if (words[i] === word2) { // If the current word is word2, update the position2
        position2 = i;
      }
      // If both the positions are updated, update the shortest distance
      if (position1 !== -1 && position2 !== -1) {
        shortestDistance = Math.min(shortestDistance, Math.abs(position1 - position2));
      }
    }
    return shortestDistance;
  }

const words1 = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
const word11 = "fox";
const word21 = "dog";
const expectedOutput1 = 5;
const actualOutput1 = shortestDistance(words1, word11, word21);
console.log("Test case 1:", expectedOutput1 === actualOutput1);