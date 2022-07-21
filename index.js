/*You are given an array of integers. Rearrange the array so that all zeroes are at the beginning of the array.
For example, [4,2,0,1,0,3,0] -> [0,0,0,4,1,2,3]*/

/*
[1,2,0,3,0,4,0,])

^^^^^^^^^^¥
[1,2,0,3,0,4,0,]
^^^^^^^^^^¥
there are 3 three zeros O's so we create a beginning partition or cloud ^^^ to separate them from the non zeros

Time Complexity: O(n) Space Complexity: O(1)
*/


/*function moveZerosToBeginning(arr) {
  boundary = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      [arr[boundary],arr[i]]=[arr[i],arr[boundary]]
      boundary += 1;

    }
  }
  return arr;
}
console.log(moveZerosToBeginning([4, 2, 0, 1, 0, 3, 0]))*/
//to test comment one function at a time 


/*function moveZerosToEnd(arr) {
  boundary = 0;
  for (i=0;i<arr.length;i++) {
    if (arr[i] == 0) {
      [arr[i],arr[boundary]]=[arr[boundary],arr[i]];
      boundary++;
    }
  }
  return arr;
}
console.log(moveZerosToEnd([4, 2, 0, 1, 0, 3, 0]))

*/


function dutchNationalFlag(arr, pivot) {
  let low_boundary = 0;
  let high_boundary = arr.length - 1;
  let i = 0;

  while (i <= high_boundary) {
    if (arr[i] < pivot) {
      [arr[low_boundary], arr[i]] = [arr[i], arr[low_boundary]]
      low_boundary += 1
      i++

    } else if (arr[i] > pivot) {
      [arr[i], arr[high_boundary]] = [arr[high_boundary], arr[i]]
      high_boundary -= 1
    } else {
      i++
    }
  }
  return arr;
}
console.log(dutchNationalFlag([5, 2, 4, 4, 6, 4, 4, 3], 4))

              //how to pass the 2nd argument or pivot?