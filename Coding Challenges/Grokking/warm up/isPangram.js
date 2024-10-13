function checkIfPangram(sentence) {
    const seen = new Set();
    for(let i=0; i<sentence.length; i++) {
      const currChar = sentence[i].toLowerCase();
      if (/[a-z]/.test(currChar)){
        seen.add(currChar);
      }
    }
    return seen.size === 26;
  }
  
  console.log(checkIfPangram("TheQuickBrownFoxJumpsOverTheLazyDog"));
  
  
  
  