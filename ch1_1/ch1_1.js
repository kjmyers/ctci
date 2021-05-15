/* Problem 1 ch1
Is Unique: 
Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?
*/


function isStringUnique(word) {
    var map = {}

    for (i in word) {
        if(map[word[i]])
        {
            return false
        }
        map[word[i]] = i
    }
    return true
}


console.log(isStringUnique("help"))