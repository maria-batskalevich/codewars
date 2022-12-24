//Write a function that takes an array and wraps all 0s to the end,
// without changing the order of the rest of the array elements.
//
// For example:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) --> [false,1,1,2,1,3,"a",0,0]
let arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"]
const moveZeros = (arr) => {
    return arr.filter(f => f !== 0).concat(arr.filter(f => f === 0))
}
console.log(moveZeros(arr))

//Find the missing letter.
// Write a function that takes an array of letters as a parameter,
// arranged alphabetically and returns an array with the missing letter.
// The input array is at least 2 long and contains letters of only one case.
//
// For example:
// findMissingLetter(['a','b','c','d','f']) --> 'e'

let stringArray = ['a', 'c', 'd', 'e', 'f']
const findMissingLetter = (stringArray) => {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let resultArray = []
    let i = 0
    while (i <= stringArray.length)
        if (stringArray[i] === alphabet[i]) {
            resultArray.push(stringArray[i])
            i++
        } else if (stringArray[i] !== alphabet[i]) {
            resultArray.push(alphabet[i])
            i++
        }
    return resultArray
}

console.log(findMissingLetter(stringArray))

