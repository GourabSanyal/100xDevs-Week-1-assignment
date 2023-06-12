/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(s1, s2) {
  newS1 = s1.split('').sort()
  newS2 = s2.split('').sort()

  if (newS1 == newS2){
    return true
  } else {
    false
  }
}

// var bool = isAnagram(air, rai)
// console.log(bool)

module.exports = isAnagram;
