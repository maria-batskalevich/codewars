//---------------------------------- 6 kyu ------------------------------------------------------

//The range() function
//Let's implement the range function:
//
// range([start], stop, [step])
//
// range(1, 11);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// range(1, 4, 0); // /!\ note that the step is 0
// => [1, 1, 1]
//
// range(0);
// => []
//
// range(10, 0); // /!\ note that the end is before the start
// => []
//
// range(10);
// => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//
// range(0, 30, 5);
// => [0, 5, 10, 15, 20, 25]
// start, if omitted, defaults to 0; step defaults to 1.
//
// Returns a list of integers from start to stop, incremented by step, exclusive.
//
// Note that ranges that stop before they start are considered to be zero-length instead of negative.
function range(start, stop, step) {
    let result = [],
        a = arguments.length === 1 ? 0 : start,
        b = arguments.length === 1 ? start : stop,
        c = step !== void (0) ? step : 1;
    if (b < a) return result;

    for (let i = a; (step === 0 ? result.length + a : i) < b; i = i + c) {
        result.push(i);
    }
    return result;
}

//Stop gninnipS My sdroW!
//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
// Examples:
//
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"
const spinWords = (string) => {
    return string.split(' ').map(m => m.length > 4 ? m.split('').reverse().join('') : m).join(' ')
}

//Create Phone Number
//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
//
// Don't forget the space after the closing parentheses!
function createPhoneNumber(numbers) {
    let format = "(xxx) xxx-xxxx";
    for (let i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }
    return format;
}

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
//Sum of Digits / Digital Root
//Digital root is the recursive sum of all the digits in a number.
//
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
//
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
function digitalRoot(n) {
    let sum = n.toString().split('').map(m => parseInt(m)).reduce((acc, num) => acc + num)
    if (sum > 9) {
        sum = sum.toString().split('').map(m => parseInt(m)).reduce((acc, num) => acc + num)
        if (sum > 9) {
            sum = sum.toString().split('').map(m => parseInt(m)).reduce((acc, num) => acc + num)
        }
    }
    return sum
}

//Replace With Alphabet Position
//Welcome.
//
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//
// If anything in the text isn't a letter, ignore it and don't return it.
//
// "a" = 1, "b" = 2, etc.
//
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetArr = ['', ...alphabet.split('')];
    let answerArr = text.toLowerCase().split('').map(el => alphabetArr.indexOf(el)).filter(el => el !== -1);

    return answerArr.join(' ');
}

//Take a Ten Minutes Walk
//You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early
// to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens
// with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter
// strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each
// letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will
// return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!)
// and will, of course, return you to your starting point. Return false otherwise.
//
// Note: you will always receive a valid array containing a random assortment of direction letters
// ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
function isValidWalk(walk) {
    let x = 0;
    let y = 0;
    if (walk !== null && walk.length <= 10 && walk.length > 2) {
        walk.forEach(el => el === 'n' ? y++ : el === 's' ? y-- : el === 'e' ? x++ : el === 'w' ? x-- : '')
        return x === 0 && y === 0
    } else {
        return false
    }
}

//Find the unique number
//There is an array with some numbers. All numbers are equal except for one. Try to find it!
//
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
//
// The tests contain some very huge arrays, so think about performance.
function findUniq(arr) {
    return +arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el))
}

//Count the smiley faces!
//Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
//
// Rules for a smiling face:
//
// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.
//
// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
//
// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array).
// Order of the face (eyes, nose, mouth) elements will always be the same.

function countSmileys(arr) {
    console.log(arr)
    let count = 0;
    arr.forEach(el => {
        debugger
        switch (el.length) {
            case 2:
                (el[0] === ':' || el[0] === ';') && (el[1] === ')' || el[1] === 'D') && count++
                break;
            case 3:
                (el[0] === ':' || el[0] === ';') && (el[1] === '-' || el[1] === '~') && (el[2] === ')' || el[2] === 'D') && count++
                break;
        }
    })
    return count
}

//Build Tower
//Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//
// For example, a tower with 3 floors looks like this:
//
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]
function towerBuilder(nFloors) {
    let towel = [];
    for (let i = 0; i < nFloors; i++) {
        let space = nFloors - i - 1;
        let spaceFloor = ' '.repeat(space)
        let symbol = 2 * i + 1;
        let symbolFloor = '*'.repeat(symbol)
        towel[i] = spaceFloor + symbolFloor + spaceFloor
    }
    return towel
}

//Roman Numerals Encoder
//Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral
// representation of that integer.
//
// Modern Roman numerals are written by expressing each digit separately starting with the left
// most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered:
// 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each
// Roman symbol in descending order: MDCLXVI.
//
// Example:
//
// solution(1000); // should return 'M'
// Help:
//
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

function solution(number) {
    let rules = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I',
    }
    let result = '';
    let keys = Object.keys(rules).sort((a, b) => b - a);

    for (let key of keys) {
        let count = Math.floor(number / +key);
        result += rules[key].repeat(count);
        number -= +key * count;
        if (number === 0) break;
    }
    return result;
}

//Find the odd int
//Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.
//
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    let counts = {};
    A.forEach(x => counts[x] = (counts[x] || 0) + 1); //{1: 2, 2: 4, 3: 6, 4: 1}
    for (let key in counts) {
        if (counts[key] % 2) {
            return +key
        }
    }
}

function findOdd2(A) {
    return A.reduce((a, b) => a ^ b)
}

//Who likes it?
//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items.
// We want to create the text that should be displayed next to such an item.
//
// Implement the function which takes an array containing the names of people that like an item.
// It must return the display text as shown in the examples:
//
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.
function likes(names) {
    let count = names.length - 2
    if (names.length === 0) {
        return `no one likes this`
    } else if (names.length === 1) {
        return `${names[0]} likes this`
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if (names.length >= 4) {
        return `${names[0]}, ${names[1]} and ${count} others like this`
    }
}

//Bit Counting
//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
//
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
//
// BITSALGORITHMS
const countBits = (n) => {
    let arr = []
    while (n > 0.9) {
        if (n % 2 !== 0) {
            arr.push(1)
            n = n - 1
        } else {
            arr.push(0)
        }
        n = n / 2
    }
    let result = arr.reverse().filter(el => el === 1)
    return result.length
};

const countBits2 = n => n.toString(2).split('0').join('').length

//Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits
// that occur more than once in the input string. The input string can be assumed to contain only alphabets
// (both uppercase and lowercase) and numeric digits.
//
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

let text = "aabbcde"

function duplicateCount(text) {
    let result = {}
    text.toLowerCase().split('').forEach(el => {
        result[el] = result[el] > 0 ? result[el] + 1 : 1
    })
    return Object.entries(result).filter(el => el[1] !== 1).length
}

// console.log(duplicateCount(text))

//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//
// For example:
//
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

let iterable = [1, 1, 2, 3, 4, 4]
const uniqueInOrder1 = (iterable) => {
    console.log(iterable)
    let arr = []
    if (iterable) {
        if (typeof iterable === "string") {
            let arr = iterable.split('')
        }
        arr = iterable
        let resultArray = []
        resultArray.push(arr[0])
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] !== arr[i + 1]) {
                resultArray.push(arr[i + 1])
            }
        }
        return resultArray
    } else {
        return []
    }
}

const uniqueInOrder = (iterable) => {
    return iterable.filter((a, i) => a !== iterable[i - 1])
}
// console.log(uniqueInOrder(iterable))

//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.
//
// For example (Input --> Output):
//
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    let amount = 0;
    while (num > 9) {
        num = num.toString().split('').reduce((a, b) => a * b)
        amount++
    }
    return amount
}

// console.log(persistence(39))

// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
//
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
    str = str.split('');
    return str.map(function (el, i) {
        if (el === '-' || el === '_') {
            el = str[i + 1].toUpperCase();
            str.splice(i + 1, 1);
        }
        return el;
    }).join('');
}

// console.log(toCamelCase("the-stealth-warrior"))

//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
//
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
    let wordsArray = words.split(' ')
    const findNumber = words.match(/[1-9]/g);
    // console.log(findNumber)
    const result = []
    if (words.length === 0) return words
    wordsArray.map((el, i) => {
        let counter = (i + 1).toString()
        const index = findNumber.indexOf(counter)
        result.push(wordsArray[index])
    })
    return result.join(' ')
}

// console.log(order("is2 Thi1s T4est 3a"))

//Duplicate Encoder
//The goal of this exercise is to convert a string to a new string where each character in the new string
// is "(" if that character appears only once in the original string, or ")" if that character appears more
// than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages.
// If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// function duplicateEncode(word){
//     const letters = word.toLowerCase().split('');
//     const counts = letters.reduce((acc, i) => ((acc[i] = (acc[i] || 0) + 1), acc), {});
//     return letters.map(letter => counts[letter] === 1 ? '(' : ')').join('');
// }

const duplicateEncode = (word) => {
    let lettersArr = word.toLowerCase().split('');
    let result = lettersArr.reduce((acc, i) => {
        if (acc.hasOwnProperty(i)) {
            acc[i] += 1;
        } else {
            acc[i] = 1;
        }
        return acc;
    }, {})
    return lettersArr.map(el => result[el] === 1 ? '(' : ')').join('')
}

console.log(duplicateEncode('recede'))

// function duplicateEncode(word){
//     return word
//         .toLowerCase()
//         .split('')
//         .map( function (a, i, w) {
//             return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//         })
//         .join('');
// }


