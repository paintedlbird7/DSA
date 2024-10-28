
function removeDuplicates(arr) {
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
  
  
  console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])); //4  
  // console.log(removeDuplicates([2, 2, 2, 11])); //2
  
  //~TODO: write step by step comment explaination 
  