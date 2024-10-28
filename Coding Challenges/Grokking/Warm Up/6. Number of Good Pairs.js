function numGoodPairs(nums) {
    let pairCount = 0;
    let map = {}; // Use an object instead of Map
    for (let n of nums) {
      map[n] = (map[n] || 0) + 1; // increment the count of 'n' in the map
      // every new occurrence of a number can be paired with every previous occurrence
      // so if a number has already appeared 'p' times, we will have 'p-1' new pairs
      pairCount += map[n] - 1;
    }
    return pairCount;
  }

let nums1 = [1, 2, 3, 1, 1, 3];
let result1 = numGoodPairs(nums1);
console.log(`Result 1: ${result1} (Expected: 4)`);