function isPalindrome(word) {
  // Step 1: Convert the string to an array of characters
  // Step 2: Reverse the array
  // Step 3: Convert the reversed array back into a string
  const reversedWord = word.split('').reverse().join('');

  // Step 4: Compare the reversed string to the original string
  return word === reversedWord;
}

/* 
  Pseudocode:
  1. Convert string to array of characters using split('').
  2. Reverse the array using reverse().
  3. Join the array into a string using join('').
  4. Return the result of comparing the original string to the reversed string using ===.
*/

/*
  Explanation of solution:
  The isPalindrome function checks if the input string is the same forwards and backwards.
  It does this by reversing the string and comparing the reversed version to the original.
  If both are identical, it returns true, indicating the string is a palindrome.
  If they are different, it returns false.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));
}

module.exports = isPalindrome;
