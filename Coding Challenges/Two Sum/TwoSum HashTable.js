//Given a sorted array of integers, find two numbers in the array that sum to a given integer target.
//For example, if a = [1,2,3,5,6,7] and target = 11, the answer will be 5 and 6.




function HashSet(a, target) {
  let set = {} //declaring our set for storage in the hash

  for (i = 0; i < a.length; i++) { // loop over each num or [i]
    let diff = target - [i]; //finding the difference or complement to the num or [i] by subtracting by the num
    if (diff in set) { // get the diff, check if its already in the hash set if not then add the num or [i] to the set as true  
      return [diff, i]; //if it is in the set, return the diff and the num [i] in a array

    } else { //if its not matching
      set[i] = true; //storing the integer in our hash 
    }
  }
}
console.log(HashSet([6, 3, 5, 2, 1], 4))

//Time complexity: O(n)
//Space complexity: O(n)

/* key|value
    6 | true
    3 | 1 🎯
 

[6,3,5,2,1],4
[diff,i] diff of 4-6=2 so would result would be [2,6] which is not the target value
add it to the hash and move on keep looping i to the next value which is 4-3=1 or [1,3] which is the 🎯 so return [diff,i]
*/

//two sum in disguise,      consider a collection of movies of various lengths, an overall duration of a flight, and write an algorithm that would return two different movies whose lengths add up to the one of the flight. 
//

