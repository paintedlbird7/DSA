function isAnagram(s, t) {
    // Check if the lengths of both strings are equal. If not, return false.
    if (s.length !== t.length) {
      return false;
    }

    // Create an object to store the frequency of characters in both strings.
    let freqMap = {};
    for (let i = 0; i < s.length; i++) {
      // Increment the frequency of the character in string s.
      freqMap[s[i]] = (freqMap[s[i]] || 0) + 1;
      // Decrement the frequency of the character in string t.
      freqMap[t[i]] = (freqMap[t[i]] || 0) - 1;
    }

    // Check if the frequency of all characters is 0.
    for (let char in freqMap) {
      if (freqMap[char] !== 0) {
        return false;
      }
    }

    // If all characters have a frequency of 0, this means that 't' is an anagram of 's'.
    return true;
  }

  var s1 = "hello";
  var t1 = "world";
  console.log(isAnagram(s1, t1)); // Expected output: false