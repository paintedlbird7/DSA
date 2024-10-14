function isPalindrome(s) {
  let i = 0, j = s.length - 1; // initialize two pointers, one at the start and one at the end of the string
  while (i < j) { // continue until the two pointers cross over
    while (i < j && !s[i].match(/^[a-z0-9]+$/i)) { // move i forward until a letter or digit is found
      i++;
    }
    while (i < j && !s[j].match(/^[a-z0-9]+$/i)) { // move j backward until a letter or digit is found
      j--;
    }
    // compare the characters at i and j after converting them to lowercase
    if (s[i].toLowerCase() !== s[j].toLowerCase()) 
      return false; // if they are not equal, the string is not a palindrome
    i++; // move i forward
    j--; // move j backwards
  }
  return true; // if the two pointers have crossed over, the string is a palindrome
}

console.log(isPalindrome("A man, a plan, a canal, Panama!"));