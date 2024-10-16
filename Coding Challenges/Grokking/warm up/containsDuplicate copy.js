function containsDuplicate(nums) {
    const uniqueSet = new Set(); // Use Set to store unique elements
    for (let i = 0; i < nums.length; i++) {
      
      if (uniqueSet.has(nums[i])) { // If the set already contains the current element, return true
        return true;
      }
      uniqueSet.add(nums[i]); // Add the current element to the set
    }
    return false; // Return false if no duplicates found
  }

const nums2 = [1, 2, 3, 1];
console.log(containsDuplicate(nums2)); // Expected output: true