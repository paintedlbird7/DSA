//Given an array of sorted numbers, move all non-duplicate number instances at the beginning of the array in-place. The non-duplicate numbers should be sorted and you should not use any extra space so that the solution has constant space complexity i.e., .

function remove_duplicates(arr) {
    // index of the next non-duplicate element
    let nextNonDuplicate = 1;
  
    let i = 0;
    while (i < arr.length) {
      if (arr[nextNonDuplicate - 1] !== arr[i]) {
        arr[nextNonDuplicate] = arr[i];
        nextNonDuplicate += 1;
      }
      i += 1;
    }
  
    return nextNonDuplicate;
  }
  
  
  console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9])); 
  console.log(remove_duplicates([2, 2, 2, 11])); //2
  