function reversedArray(a){
    let reverse = [];
    for(let i=a.length-1; i>0; i--){
        reversed.push(a[i]);
    }
    return reversed;
}

// output: array
// input: array

// The original array is [1, 4, 3, 2] . Reversed, it is [2, 3, 4, 1].


// Example input
let arr = [1, 4, 3, 2];

// Call the function
let res = reverseArray(arr);

// Print result
console.log(res.join(' '));