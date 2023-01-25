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
// const isTheSame = (arr) => {
//     let res = arr.map(el => el.split('').sort().join(''))
//     return res.every(el => el === res[0])
// }

const isTheSame = (arr) => {
    let res = arr.map(el => el.split('').sort().join('')) //[ 'act', 'act', 'act' ]
    return res.every(el => el === res[0]) //true
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
    const entries = Object.entries(result).sort((a, b) => b[1] - a[1])
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

//11. Write a function that returns the sum like this:
//
// For example:
// f(1)(2)(3) --> 6

const sum1 = function (a) {
    return function (b) {
        if (b) {
            return sum(a + b); // it takes an argument and return a function which again can take an argument.
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

    f.toString = function () {
        return currentSum;
    };
    return f;
}


// console.log(sum2(1)(2)(3))

function addq(a) {
    function sum(b) {
        a = a + b;
        return sum;
    }

    sum.toString = function () {
        return a;
    }
    return sum;
}

function add(n) {
    let addNext = function (x) {
        return add(n + x);
    };

    addNext.valueOf = function () {
        return n;
    };

    return addNext;
}

let sum = a => b => b ? sum(a + b) : a
// console.log(sum(1)(2)(3)(4));

//12. Write a function with two parameters that creates an array of elements,
// representing the sum of the corresponding elements of the given arrays.
// const array1 = [1, 2, 3;
// const array2 = [4, 5, 6];
// func(array1,array2) // [5,7,9,4,5]

const sumOfTwoArrays = (arr1, arr2) => {
    let res = []
    let count;
    if (arr1.length >= arr2.length) {
        count = arr1.length
    } else {
        count = arr2.length
    }
    for (let i = 0; i < count; i++) {
        if (arr1[i] === undefined) {
            arr1.push(0)
        } else {
            arr2.push(0)
        }
        res.push(arr1[i] + arr2[i])
    }
    return res

}
// console.log(sumOfTwoArrays([1, 2, 3, 4], [1, 2, 3, 4, 5]))


// 13. Write a function countIdentic(arr) that returns the number of duplicate elements in an array.
const countIdentic = (arr) => {
    let resultArr = {}
    arr.forEach(el => {
        resultArr[el] = resultArr[el] > 0 ? resultArr[el] + 1 : 1
    })
    console.log(resultArr)
    let res = Object.entries(resultArr).sort((a, b) => b[1] - a[1])
    return res[0][1]
}
// console.log(countIdentic([15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9]))

// 14. Write a union function that returns an array containing only the unique elements from each array.
const union = (arr1, arr2) => {
    // return new Set([...arr1, ...arr2])
    let resultArr = [...arr1, ...arr2]
    return resultArr.filter((el, index, arr) => index === arr.indexOf(el))
}

// console.log(union([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]))

//15. Write a function compareNumbers(arr) that returns an array whose elements are sorted in descending order of their values.
const compareNumbers = (arr) => {
    return arr.sort((a, b) => a - b)
}

// console.log(compareNumbers([3, 8, 7, 6, 5, -4, 3, 2, 1]))

//16. Write a function sumOfSquares(arr) that returns the sum of squares of array values.

const sumOfSquares = (arr) => {
    const sqr = arr.map(el => el ** 2)
    return sqr.reduce((el, acc) => el + acc)

}
// console.log(sumOfSquares([1, 2, 3, 4, 5]))

// 17. Write a function `removeDuplicates(arr)` that returns an array,
// in which duplicate elements have been removed from the arr array.

const removeDuplicates = (arr) => {
    // return new Set(arr)
    return arr.filter((el, index, arr) => index === arr.indexOf(el))
}
// console.log(removeDuplicates(["php", "php", "css", "css",
//     "script", "script", "html", "html", "java"
// ]))

//18. Write a colonOdd(num) function that takes num in
// as an argument and inserts a colon (:) between two odd numbers.
// For example, if the number 55639217 is entered, then the output should be 5:563:921:7

const colonOdd = (num) => {
    const strArr = num.toString().split('')
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] % 2 && strArr[i + 1] % 2) {
            strArr[i] = strArr[i] + ':'
        }
    }
    return strArr.join('')
}
// console.log(colonOdd(55639217))

//19. Write a function `copyArr(arr)` that copies an array without changing the original.

const copyArr = (arr) => {
    return [...arr]
    // return arr.map(el => el)
}
// console.log(copyArr([1, 2, 3]))

//20. Write a function `comparison(str1, str2)` that compares
// strings are case-insensitive.

const comparison = (str1, str2) => {
    return str1.toLowerCase() === str2.toLowerCase()
}

// console.log(comparison('string', 'StRiNg')) // true

//21. Write a function zeros(num, len) that pads a numeric value with an extra "+" or "-" sign, depending on the
// argument passed, with zeros to the specified length.

const zeros = (num, len, sign) => {
    let numsArr = num.toString().split('')
    let countOfZero = len - numsArr.length
    let newArr = []
    for (let i = 0; i < countOfZero; i++) {
        newArr.push(0)
    }
    return [...sign, ...newArr, ...numsArr].join('')
}

const zeros2 = (num, len, sign = '') => num.toString().length === len ? sign + String(num) : zeros('0' + num, len, sign)
// console.log(zeros(333, 3, '+'))
// console.log(zeros2(333, 3, '+'))

//22. Write a `strip(str)` function that removes all extra spaces from the string str.
const strip = (str) => {
    return str.split(' ').filter(el => el !== '').join(' ')
}
// console.log(strip("    Pasha is a good      boy     "))

// 23. Write a `cutString(str, n)` function that removes the extra
// words from the string str, leaving n words in it.
//
// For example:
// const str = "Gravity is applied to the body's center of mass";`
// cutString(str, 3) --> "Gravity is applied"

const cutString = (str, n) => {
    return str.split(' ').slice(0, n).join(' ')
}
// console.log(cutString('cat dog fox bear', 2))

//24. Write a function `alphabetize(str)` that returns a string,
// sorting its characters in alphabetical order.
const alphabetize = (str) => {
    return str.split('').sort()
}
// console.log(alphabetize("redev"))

//25. Write a function `uniqueLetters(str)` that returns a string,
// leaving only unique characters in it, i.e. occurring once in a line.

const uniqueLetters = (str) => {
    return str.split('').filter((el, index, arr) => index === arr.indexOf(el)).join('')
}
// console.log(uniqueLetters('anaconda'))

//26. Write a `startsWith()` function that determines whether a string starts with the characters of another string,
// returning true or false as appropriate.
//     let str = 'abc def ghi jkl mno pqr stu';
// For example:
//     str.startsWith('abc') -->

const startsWith = (str1, str2) => {
    return str1.includes(str2, [0, str2.length])
}
// console.log(startsWith('abc def ghi jkl mno pqr stu', 'abc'))

//27. Write a function capitalizeFirstLetter(str),
// which converts the first character of the string to uppercase.

const capitalizeFirstLetter = (str) => {
    return str.split('').map(el => el === str[0] ? el.toUpperCase() : el).join('')
}
// console.log(capitalizeFirstLetter('abc'))

//28. Write a function `isUpperCase(str, character)` that determines if
// in which case the character of the string is written at the specified position.
// If it is written in upper case, return true, if in lower case, return false.
//
// For example:
// isUpperCase('JavaScript tasks', 6); --> true

const isUpperCase = (str, character) => {
    return str.charAt(character).toUpperCase() === str.charAt(character)
}
// console.log(isUpperCase('tasks JavaScript', 6))

//29. Your task is to count the cats hidden in the backyard (represented in 2D Array format)
// Cats are good at hiding, but their ears (''^^") are visible.
// Your task is to write a function (countCats) that will count cats. Good luck!
//
// The number of cats found must be `number`.
// If no cats are found, the function should return `0`
//
// For example:
// countCats([[0,1,"^^"],[9,"^^",2],["^^",8,7]]) --> 3

const countCats = (arr) => {
    let count = 0
    arr.forEach(el => el.includes('^^') ? count++ : el)
    return count
}
// console.log(countCats([[0, 1, "^^"], [9, "^^", 2], ["^^", 8, 7]]))

// 30. Write a function to check if a string is a palindrome.

const ifStringPalindrome = (str) => {
    return str === str.split('').reverse().join('')
}
// console.log(ifStringPalindrome('abba'))

//31. Write a function that returns the sum of the two smallest positive numbers,
// given an array of at least 4 positive numbers.
//
// For example:
// [12,423,54,1235,3,15,2,52] --> 5

const sumOfTwoSmallestNumbers = (arr) => {
    let sortArr =  arr.sort((a,b) => a - b).filter(el => el > 0)
    return sortArr[0] + sortArr[1]
}
// console.log(sumOfTwoSmallestNumbers([12,423,54,1235,3,-1,2,52])) //5

//32. Write a function that takes a number n (n > 0) and
// returns a reverse sequence string from n to 1.
//
//
// For example: if n = 5 the output should be "5 4 3 2 1"

const reverseSequenceString = (n) => {
    let res = []
    for(let i = n; i >=1; i--) {
        res.push(i)
    }
    return res.join(' ')
}
// console.log(reverseSequenceString(5)) //'5, 4, 3, 2, 1'

//In this task, you need to remove all elements of the second array from one array.
//
// For example:
// arrayDiff([1,2],[1]) --> [2]
// arrayDiff([1,2,2,2,3,4],[2,3]) --> [1,4]

const arrayDiff = (arr1, arr2) => {
    return arr1.filter(el => !arr2.includes(el))
}
console.log(arrayDiff([1,2, 3, 4, 5], [1, 5])) // [2, 3, 4]