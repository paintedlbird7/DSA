function searchTriplets(arr) {
    arr.sort((a, b) => a - b);
    const triplets = [];
    
    for (let i = 0; i < arr.length; i++) {
        // skip same element to avoid duplicate triplets
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue;
        }
        searchPair(arr, -arr[i], i + 1, triplets);
    }

    return triplets;
}

function searchPair(arr, targetSum, left, triplets) {
    let right = arr.length - 1;
    while (left < right) {
        const currentSum = arr[left] + arr[right];
        if (currentSum === targetSum) { // found the triplet
            triplets.push([-targetSum, arr[left], arr[right]]);
            left += 1;
            right -= 1;
            while (left < right && arr[left] === arr[left - 1]) {
                left += 1; // skip same element to avoid duplicate triplets
            }
            while (left < right && arr[right] === arr[right + 1]) {
                right -= 1; // skip same element to avoid duplicate triplets
            }
        } else if (targetSum > currentSum) {
            left += 1; // we need a pair with a bigger sum
        } else {
            right -= 1; // we need a pair with a smaller sum
        }
    }
}

console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(searchTriplets([-5, 2, -1, -2, 3]));
