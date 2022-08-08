function solution(A) {
  const set = new Set(A);
  // starts at range 1 ...
    let i = 1;
// to check if value is in the set use .has() method
// while condition has { do something/iterate/loop over} 
  while (set.has(i)) {
    // iterate over the 
    i++
  }
  return i;
}

console.log(solution([1,3,6,4,1,2])); //missingInteger 5 
// O(n)


// function solution(A) {
//   for(i=1; i < 1000000; i++) {
//       if(!A.includes(i)){
//         return i;
//       }
//   }
// }
//                           
// console.log(solution([1,3,6,4,1,2])); //missingInteger"" 5
//O(n2) 
