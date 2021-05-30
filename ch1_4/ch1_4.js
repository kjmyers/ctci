/* Problem 4 ch1
Palindrome Permutation:
Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards.
A permutation is a rearrangement of letters.
The palindrome does not need to be limited to just dictionary words.
*/

function palindromePermutation(word) {

    var map = {}

    word = word.toLowerCase()

    for (i in word) {
        if (word[i] in map) {
            map[word[i]] = map[word[i]] + 1
        }
        else {
            map[word[i]] = 1
        }
        
    }
    delete map[' '] //ignore space

    oddCount = 0
    for (key in map) {
        if(map[key] % 2) {
            console.log(key)
            oddCount++
        }
    }

    if (oddCount > 1) {
        return false
    }
    else{
        return true
    }

}

word = "No lemon, no melon"
console.log(palindromePermutation(word))
// true
// taco cat, atco cta