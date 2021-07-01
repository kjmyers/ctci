/* Problem 5 ch1
One Away:
There are three types of edits that can be performed on strings:
Insert a character, remove a character, or replace a character.
Given two strings, write a function to check if they are one edit (or zero edits) away
*/

function oneAway(string1, string2) {

    console.log(string1)
    console.log(string2)

    var errorCount = 0
    
    // if(string1.length - string2.length > 1) {
    //     return false
    // }
    // else if(string1.length - string2.length == 1) {
    //     errorCount++
    // }

    if(string2 > string1) {
        longer = string2
        shorter = string1
    }
    else {
        longer = string1
        shorter = string2
    }

    for(letter in longer) {
        console.log(longer[letter])
        if(longer[letter] != shorter[Number(letter) + errorCount]) {
            errorCount++
            if(errorCount > 1) {
                return false
            }
        }
    }
    console.log(errorCount)
    return true

}


string1 = 'This is a line'
string2 = 'This is a line'

console.log(oneAway(string1, string2))
