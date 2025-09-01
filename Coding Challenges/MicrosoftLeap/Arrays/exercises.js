// 1
function reverseArray(arr) {
    // Your code here
    return arr.reverse(); // or implement manually
}

// Test
let arr1 = [1, 2, 3, 4];
console.log(reverseArray(arr1)); // Expected: [4, 3, 2, 1]


//2
function sumEven(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) sum += num;
    }
    return sum;
}

// Test
let arr2 = [1, 2, 3, 4];
console.log(sumEven(arr2)); // Expected: 6

// 3

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}

// Test
fizzBuzz(15);


//4 
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Test
console.log(isPalindrome("racecar")); // Expected: true
console.log(isPalindrome("hello"));   // Expected: false


function maxMin(arr) {
    let max = arr[0], min = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
        if (num < min) min = num;
    }
    return { max, min };
}

// Test
let arr5 = [5, 1, 9, 2];
console.log(maxMin(arr5)); // Expected: { max: 9, min: 1 }


//6 
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

// Test
console.log(countVowels("hello")); // Expected: 2


//7
function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

// Test
console.log(sumDigits(1234)); // Expected: 10


//8 
function rotateLeft(arr, d) {
    let n = arr.length;
    d = d % n; // handle d > n
    return arr.slice(d).concat(arr.slice(0, d));
}

// Test
console.log(rotateLeft([1, 2, 3, 4, 5], 2)); // Expected: [3, 4, 5, 1, 2]


//9
function sum2DArray(matrix) {
    let sum = 0;
    for (let row of matrix) {
        for (let num of row) {
            sum += num;
        }
    }
    return sum;
}

// Test
let matrix = [
    [1, 2],
    [3, 4]
];
console.log(sum2DArray(matrix)); // Expected: 10

//10
function sum2DArray(matrix) {
    let sum = 0;
    for (let row of matrix) {
        for (let num of row) {
            sum += num;
        }
    }
    return sum;
}

// Test
let matrix = [
    [1, 2],
    [3, 4]
];
console.log(sum2DArray(matrix)); // Expected: 10
