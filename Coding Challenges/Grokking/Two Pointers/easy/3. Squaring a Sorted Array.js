//Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

function makeSquares(arr) {
    // Get the length of the input array
    const n = arr.length;

    // Initialize an array to store the squared values
    let squares = Array(n).fill(0);

    // Initialize an index to keep track of the highest square in the result array
    let highestSquareIdx = n - 1;

    // Initialize two pointers for the left and right ends of the input array
    let left = 0, right = n - 1;

    // Iterate through the input array
    while (left <= right) {
      // Calculate the squares of the values at the left and right pointers
      let leftSquare = arr[left] * arr[left];
      let rightSquare = arr[right] * arr[right];

      // Compare the squares and store the larger square in the result array
      if (leftSquare > rightSquare) {
        squares[highestSquareIdx] = leftSquare;
        left += 1;
      } else {
        squares[highestSquareIdx] = rightSquare;
        right -= 1;
      }

      // Move the index of the highest square to the left
      highestSquareIdx -= 1;
    }

    // Return the array of squared values
    return squares;
  }



console.log(`Squares: ${makeSquares([-2, -1, 0, 2, 3])}`); //"Squares: 0,1,4,4,9"
console.log(`Squares: ${makeSquares([-3, -1, 0, 1, 2])}`); //"Squares: 0,1,1,4,9"