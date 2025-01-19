// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
function reverseInt= (n) {                                        
  const reversed = n.toString().split("").reverse().join("");                                         
  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(-15));

    // to reverse, make new variable like we did for a string
// turn the integer into a string, then can use .split("").reverse().join("")
// use toString to turn a integer into a string
// parseInt to turn a string into a number
// math.Sign to keep the negative
// * math.Sign just like an if (n<0) { }