/*Reverse the order of elements in an array. For example, A = [1,2,3,4,5,6], Output = [6,5,4,3,2,1]*/

function Reverse(arr) {
  //if (a === null)
  //return
  let start = 0
  let end = arr.length - 1;

  //swap
  while (start < end) {
    aux = arr[start];
    arr[start] = arr[end];
    arr[end] = aux;

    //move two pointers
    start++
    end--;
  }
  return arr;
}
//a=[1,2,3]
console.log(Reverse([1, 2, 3])) //Time Complexity: O(n) aka linear time 
//Space Complexity:O(1) aka constant space