/* Problem 1 ch1
Is Unique: 
Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?
*/

var s = "aaaaaa"

//console.log(s.length)

for (i in s) {
    if (s[i] != s[0]) {
        console.log(false)
        return
    }
}
console.log(true)
return