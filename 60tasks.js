//1. Write a function that takes an array and wraps all 0s to the end,
// without changing the order of the rest of the array elements.
//
// For example:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) --> [false,1,1,2,1,3,"a",0,0]
let arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"]
const moveZeros = (arr) => {
    return arr.filter(f => f !== 0).concat(arr.filter(f => f === 0))
}
// console.log(moveZeros(arr))

//2. Find the missing letter.
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

// console.log(findMissingLetter(stringArray))


const findMissingLetterCustom = (arr) => {
    let alphabet = 'abcdefghijklmnopqrstuvyxyz'.split('');
    let startIndex = alphabet.indexOf(stringArray[0]);
    return alphabet.slice(startIndex, startIndex + arr.length + 1);
}

// console.log(findMissingLetterCustom(stringArray))

//3. Implement a likes :: [String] -> String function that
// should take an input array containing the names of people who like the element.
// It should return the display text, as shown in the examples:
//
// For example:
// likes([]) --> 'no one likes this'
// likes(['Peter']) --> 'Peter likes this'
// likes(['Jacob', 'Alex']) --> 'Jacob and Alex like this'
// likes(['Max', 'John', 'Mark']) --> 'Max, John and Mark like this')
// likes(['Alex', 'Jacob', 'Mark', 'Max']) --> 'Alex, Jacob and 2 others like this'
let names = ['Alex', 'Jacob', 'Mark', 'Max']
const likes = (names) => {
    names = names || []
    switch (names.length) {
        case 0: return `no one likes this`
        case 1: return `${names[0]} likes this`
        case 2: return `${names[0]} and ${names[1]} like this`
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`
        default: return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
}
// console.log(likes(names))

//4. Write a function that finds all the anagrams of a word from a list.
// A word and an array of words are given as a parameter.
// The function must return an array of all anagrams, or an empty array,
// if no anagrams are found.
//
// For example:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) --> ['aabb', 'bbaa']

const findAnagrams = (anagram, arrayOfAnagrams) => {
    let result = []
    anagram = anagram.split('').sort().join('')
    return arrayOfAnagrams.map(el => el.split('').sort().join('')).filter(f => f === anagram ? result.push(f) : '')
}

// console.log(findAnagrams('abba', ['aabb', 'abcd', 'abba', 'dada']))

//5. Your task is to write a function that takes
// parameter is an integer and squares each digit of the number.
// The result must also be returned as an integer.
//
// For example:
// squareDigits(9119) --> 811181

const squareDigits = (n) => {
    return +n.toString().split('').map(el => el*el).join('')
}

// console.log(squareDigits(9119))  // answer: 811181
