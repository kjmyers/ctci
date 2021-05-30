/* Problem 3 ch1
URLify: 
Write a method to replace all spaces in a string with '%20'.
You may assume that the string has sufficient space at the end to hold the additional characters,
and that you are given the "true" length of the string.
*/


function urlify(word, length) {
    var spaces = 0
    var finalInd = length - 1

    for(i = 0; i < length; i++) {
        if(word[i] == " ") {
            spaces++ //count spaces
        }
    }
    spaces = spaces*2 //two more positions per space
    
    newPos = finalInd + spaces
    for(i = finalInd; i > 0; i--) { //move front to back with replacement
        if(word[i] == ' ') {
            word[newPos-2] = '%'
            word[newPos-1] = '2'
            word[newPos  ] = '0'
            newPos = newPos - 3
        }
        else{
            word[newPos] = word[i]
            newPos--
        }
    }


    return word.join("")
}


var testWord = "This is a test string                      ".split('')
console.log(urlify(testWord, 21))