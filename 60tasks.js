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
        case 0:
            return `no one likes this`
        case 1:
            return `${names[0]} likes this`
        case 2:
            return `${names[0]} and ${names[1]} like this`
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
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
    return +n.toString().split('').map(el => el * el).join('')
}

// console.log(squareDigits(9119))  // answer: 811181

//6. Imagine a bus picking up and dropping off people at every stop.
// Given an array of arrays, the first element of which is equal to the number of passengers,
// who entered the bus at the stop, and the second - the number of passengers,
// got off at the stop.
//
// Your task is to write a function that returns the number of people
// remaining on the bus after the last stop (array).
// Even though this is the last stop
// there are still people on the bus (they must have fallen asleep :D ).
//
// Remember that the number of people left on the bus is always >= 0
// The value of the second number of the first array element = 0,
// because the bus is empty at the first stop.
//
// For example:
// busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]) --> 17

const busStopsPassArr = [[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]
const busStops = (busStopsPassArr) => {
    let result = [].concat(...busStopsPassArr) //[3, 0, 9, 1, 4, 10, 12, 2, 6, 1, 7, 10]
    let res = 0;
    debugger
    for (let i = 0; i < result.length; i = i + 2) {
        debugger
        res += result[i] - result[i + 1]
    }
    return res
}

// console.log(busStops(busStopsPassArr))

//7. In order to ensure data security when paying online,
// we need to mask all the digits of the bank account except the last four.
//
// Your task is to write a function that takes as
// parameter string consisting of numbers, replaces all elements with '#',
// except for the last four and returns it.
//
// For example:
// maskify("4556364607935616") --> "############5616"

const cardNumber = "4556364607935616"
const maskify = (str) => {
    const rest12Symbols = str.split('').slice(0, 12)
    const last4Symbols = str.substr(12, 4).split('').map(el => el.replace(el, '#'))
    return rest12Symbols.concat(last4Symbols).join('')
}
// console.log(maskify(cardNumber))

//8. Given two strings that contain only letters from a - z.
// Your task is to write a function that returns
// a new sorted (in order) string,
// which contains the letters of two strings repeated only once.
//
// For example:
// longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") --> "abcdefklmopqxy"

const str1 = "xyaabbbccccdefww"
const str2 = "xxxxyyyyabklmopq"
const longest = (str1, str2) => {
    let arrayNotUnique = [...new Set(str1), ...new Set(str2)]
    return [...new Set(arrayNotUnique)].sort().join('')
}
// console.log(longest(str1, str2))


//9. Given an array of words, you need to determine
// whether all words are made up of the same characters.
//
// For example:
// ["cat", "current", "who"] --> true
// ["cat", "tk", "who"] --> false

const cats = ["cat", "tac", "act"];
const cats2 = ["cat", "tk", "who"]
const isTheSame = (arr) => {
    let res = arr.map(el => el.split('').sort().join(''))
    return res.every(el => el === res[0])
}

// console.log(isTheSame(cats))


//10.Write a function that finds the most used element in an array.
//
// For example:
const arrayForEnumeration = [7, 'x', 'x', 'x', -3, 7, 'x', 7, 'x', 3, 5, 7];

// const repetitiveElement = (array) => {
//
// }
// console.log(repetitiveElement(arrayForEnumeration))

const repetitiveElement = (array) => {
    const result = {}
    array.forEach((e) => {
        result[e] = result[e] > 0 ? result[e] + 1 : 1
    })
    const entries = Object.entries(result).sort((a,b) => b[1] - a[1])
    return entries[0][0]
}
// console.log(repetitiveElement(arrayForEnumeration))


//10.xx Collect all the values in a separate array
const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 3,
                }
            ]
        },
        {
            value: 4,
            children: [
                {value: 5},
                {value: 6},
            ]
        },
    ]
}

const gerTreeValues = (tree) => {
    const stack = [tree];
    const result = []
    while (stack.length > 0) {
        let node = stack.pop()
        if (node.value !== undefined) {
            result.push(node.value)
        }
        if (node.children?.length) {
            stack.push(...node.children)
        }
    }
    return result
}
// console.log(gerTreeValues(tree))

//Write a function that returns the sum like this:
//
// For example:
// f(1)(2)(3) --> 6

const sum1  = function (a) {
    return function (b) {
        if (b) {
            return sum(a+b); // it takes an argument and return a function which again can take an argument.
        }
        return a; // it will keep on adding 1+2+3+4..
    }
};

function sum2(a) {
    let currentSum = a;
    function f(b) {
        currentSum += b;
        return f;
    }
    f.toString = function() {
        return currentSum;
    };
    return f;
}


// console.log(sum2(1)(2)(3))

function addq(a){
    function sum(b){
        a =   a+b;
        return sum;
    }
    sum.toString = function(){return a;}
    return sum;
}

function add(n){
    let addNext = function(x) {
        return add(n + x);
    };

    addNext.valueOf = function() {
        return n;
    };

    return addNext;
}

let sum = a => b => b ? sum(a + b) :a
// console.log(sum(1)(2)(3)(4));