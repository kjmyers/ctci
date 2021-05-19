/* Problem 2 ch1
Check Permutation: 
Given two strings, write a method to decide if one is a permutation of the other
*/

function isPermutation(word1, word2) {
    var map = {}

    for (i in word1) {
        map[word1[i]] = i
    }

    for (i in word2) {
        if(!map[word2[i]])
        {
            return false
        }
        //map[word[i]] = i
    }
    return true
}



var testString1 = "a gentleman"
var testString2 = "elegant man"
console.log(isPermutation(testString1, testString2))