// 1. Two Pointers Pair with Target Sum
// Given an array of numbers sorted in ascending order and a target sum, find a pair in the array whose sum is equal to the given target. If no such pair exists return [-1, -1].

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

// Example 1:

// Input: [1, 2, 3, 4, 6], target=6
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

function pair_with_target_sum(arr, targetSum) {
    let left = 0,
        right = arr.length - 1;
    while (left < right) {
        const currentSum = arr[left] + arr[right];
        if (currentSum === targetSum) {
        return [left, right];
        }
  
        if (targetSum > currentSum) {
        left += 1; // we need a pair with a bigger sum
        } else {
        right -= 1; // we need a pair with a smaller sum
        }
    }
    return [-1, -1];
  }
  
  console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6)); //[1.3]