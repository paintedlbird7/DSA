
function reverseVowels(s) {
    vowels = "aeiouAEIOU";

  // initialize pointers for start and end of the string
  let first = 0;
  let last = s.length - 1;
  let array = s.split("");

  while (first < last) {
    // increment the start pointer until a vowel is found
    while (first < last && this.vowels.indexOf(array[first]) === -1) {
      first++;
    }
    // decrement the end pointer until a vowel is found
    while (first < last && this.vowels.indexOf(array[last]) === -1) {
      last--;
    }
    // swap the values of first and last if both are vowels
    [array[first], array[last]] = [array[last], array[first]];
    // move the pointers towards the center
    first++;
    last--;
  }

  // return the modified string
  return array.join("");
}


// // test cases
// const solution = new Solution();

// const s1 = "hello";
// const expected_output1 = "holle";
// const actual_output1 = solution.reverseVowels(s1);
// console.log("Test Case 1: ", expected_output1 === actual_output1);

// const s2 = "DesignGUrus";
// const expected_output2 = "DusUgnGires";
// const actual_output2 = solution.reverseVowels(s2);
// console.log("Test Case 2: ", expected_output2 === actual_output2);

// const s3 = "AEIOU";
// const expected_output3 = "UOIEA";
// const actual_output3 = solution.reverseVowels(s3);
// console.log("Test Case 3: ", expected_output3 === actual_output3);

// const s4 = "aA";
// const expected_output4 = "Aa";
// const actual_output4 = solution.reverseVowels(s4);
// console.log("Test Case 4: ", expected_output4 === actual_output4);

// const s5 = "";
// const expected_output5 = "";
// const actual_output5 = solution.reverseVowels(s5);
// console.log("Test Case 5: ", expected_output5 === actual_output5);
