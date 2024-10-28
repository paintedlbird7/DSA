// Triplets with Smaller Sum (medium)


class Solution {
  searchTriplets(arr, target) {
    if(arr.length < 3) {
      return 0;
    }
    
    arr.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < arr.length - 2; i++) {
      count += this.searchPair(arr, target - arr[i], i);
    }
    return count;
  }

  searchPair(arr, target_sum, first) {
    let count = 0;
    let left = first + 1, right = arr.length - 1;
    while (left < right) {
      if (arr[left] + arr[right] < target_sum) { // found the triplet
        // since arr[right] >= arr[left], therefore, we can replace arr[right] by any 
        // number between left and right to get a sum less than the target sum
        count += right - left;
        left += 1;
      } else {
        right -= 1; // we need a pair with a smaller sum
      }
    }
    return count;
  }
}



const sol = new Solution();
console.log(sol.searchTriplets([-1, 0, 2, 3], 3));
console.log(sol.searchTriplets([-1, 4, 2, 1, 3], 5));
