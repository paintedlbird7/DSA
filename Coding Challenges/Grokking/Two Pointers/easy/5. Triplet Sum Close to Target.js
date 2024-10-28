//Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

class Solution {
    searchTriplet(arr, targetSum) {
      arr.sort((a, b) => a - b);
      let smallest_difference = Infinity;
      for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1,
          right = arr.length - 1;
        while (left < right) {
          const target_diff = targetSum - arr[i] - arr[left] - arr[right];
          if (target_diff === 0) { // we've found a triplet with an exact sum
            return targetSum; // return sum of all the numbers
          }
  
          // the second part of the following 'if' is to handle the smallest sum when we 
          // have more than one solution
          if (Math.abs(target_diff) < Math.abs(smallest_difference) ||
            (Math.abs(target_diff) === Math.abs(smallest_difference) && 
                                    target_diff > smallest_difference)) {
            smallest_difference = target_diff; // save the closest and the biggest difference
          }
  
  
          if (target_diff > 0) {
            left += 1; // we need a triplet with a bigger sum
          } else {
            right -= 1; // we need a triplet with a smaller sum
          }
        }
      }
      return targetSum - smallest_difference;
    }
  }
  
  const sol = new Solution();
  console.log(sol.searchTriplet([-1, 0, 2, 3], 2));
  console.log(sol.searchTriplet([-3, -1, 1, 2], 1));
  console.log(sol.searchTriplet([1, 0, 1, 1], 100));
  console.log(sol.searchTriplet([0, 0, 1, 1, 2, 6], 5));
  