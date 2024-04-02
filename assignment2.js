//  Longest Common Prefix: Write a function longestCommonPrefix(strs) that takes an array of strings strs and returns the longest common prefix shared by all strings.


// console.log(longestCommonPrefix(["flower","flow","floor"])); // Output: "flo"

function getLongestPrefix(listOfWords) {
    if (listOfWords.length === 0) return "";
  
    let prefix = "";
    let letterBeingChecked = listOfWords[0].charAt(0);
    let state = 0;
    for (let charIndex = 0; charIndex < listOfWords[0].length; charIndex++) {
      for (let i = 1; i < listOfWords.length; i++) {
        if (listOfWords[i].charAt(charIndex) !== letterBeingChecked) {
          state = 1;
          break;
        }
      }
  
      if (state === 0) {
        prefix += letterBeingChecked;
      }
  
      if (charIndex + 1 < listOfWords[0].length) {
        letterBeingChecked = listOfWords[0].charAt(charIndex + 1);
      }
  
      if (state === 1) {
        break;
      }
    }
  
    return prefix;
  }
  
  const listOfWords = ["flower", "flow", "floor","fly"];
  console.log(getLongestPrefix(listOfWords)); // output is "fl"