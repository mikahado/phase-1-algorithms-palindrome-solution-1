function reverse(word) {
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join("") 
  return reversedWord;

      //  make a copy of a string, which prints it in reverse
    //  if the input is the same as reversed string
    //   return true
    //  if the input does not match
    //   return false


}
  // Write your algorithm here

  //    make a function to check True/False condition of a palindrome

  function isPalindrome(word){
    const reversedWord = reverse(word);

    if (word === reversedWord) {
      return true
    } else {
      return false
    }
  
  }



/* Pseudocode: 

     make a function to check True/False condition of a palindrome
     make a copy of a string, which prints it in reverse
     if the input is the same as reversed string
      return true
     if the input does not match
      return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs

if (require.main === module) {
  
  console.log("Expecting: true")
  console.log("=>", isPalindrome("kayak"))
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
