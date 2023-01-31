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
    // console.log(result)
    return lettersArr.map(el => result[el] === 1 ? '(' : ')').join('')
}

// console.log(duplicateEncode('recede'))

function duplicateEncode2(word) {
    return word
        .toLowerCase()
        .split('')
        .map((el, index, arr) => {
            return arr.indexOf(el) === arr.lastIndexOf(el) ? '(' : ')'
        })
        .join('')
}

// console.log(duplicateEncode2('recede'))

//Sort the odd
//Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order
// while leaving the even numbers at their original positions.
//
// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    debugger
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}

// console.log(sortArray([5, 8, 6, 3, 4]))

//Sorting by bits
//In this kata you're expected to sort an array of 32-bit integers in ascending order of the number of on bits they have.
//
// E.g Given the array [7, 6, 15, 8]
//
// 7 has 3 on bits (000...0111)
// 6 has 2 on bits (000...0011)
// 15 has 4 on bits (000...1111)
// 8 has 1 on bit (000...1000)
// So the array in sorted order would be [8, 6, 7, 15].
//
// In cases where two numbers have the same number of bits, compare their real values instead.
//
// E.g between 10 (...1010) and 12 (...1100), they both have the same number of on bits '2' but the integer 10 is less than 12 so it comes first in sorted order.
//
// Your task is to write the function sortBybit() that takes an array of integers and sort them as described above.
//
// Note: your solution has to sort the array in place.
//
// Example:
//
// [3, 8, 3, 6, 5, 7, 9, 1]   =>    [1, 8, 3, 3, 5, 6, 9, 7]

function sortByBit(arr) {
    const countBit = (bit) => bit.toString(2).replace(/[0]/g, '').length
    return arr.sort((a, b) => countBit(a) === countBit(b) ? a - b : countBit(a) - countBit(b))
}

// console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]))

//Sums of Parts
// Let us consider this example (array written in general format):
//
// ls = [0, 1, 3, 6, 10]
//
// Its following parts:
//
// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
//
// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.
//
// Other Examples:
// ls = [1, 2, 3, 4, 5, 6]
// parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]
//
// ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
// parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
// Notes
// Take a look at performance: some lists have thousands of elements.
// Please ask before translating.

function partsSums(ls) {
    let arr = [0];
    ls.reverse().forEach(el => arr.push(arr[arr.length - 1] + el))
    return arr.reverse()
}

console.log(partsSums([1, 2, 3])) // [3, 2, 1] ==> [0, 3, 5, 6]

//Two Sum
//Write a function that takes an array of numbers (integers for the tests) and a target number.
// It should find two different items in the array that, when added together, give the target value.
// The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
//
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
//
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be
// numbers; target will always be the sum of two different items from that array).
//
// Based on: http://oj.leetcode.com/problems/two-sum/
//
// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}


// console.log(twoSum([1, 2, 3], 4))


// Which are in?
// Description:
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1
// which are substrings of strings of a2.
//
// #Example 1: a1 = ["arp", "live", "strong"]
//
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
// returns ["arp", "live", "strong"]
//
// #Example 2: a1 = ["tarp", "mice", "bull"]
//
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
// returns []
//
// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
//
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
//
// Beware: r must be without duplicates.
// Don't mutate the inputs.

function inArray(array1, array2) {
    return array1.filter((x) => array2.some((y) => y.includes(x))).sort()
}


//Meeting
// John has invited people. His list is:
// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that
// makes this string uppercase
// gives it sorted in alphabetical order by last name. When the last names are the same, sort them by first name.
// Last name and first name of a guest come in the result between parentheses separated by a comma. So the result
// of function meeting(s) will be:
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.


function meeting(s) {
    return s
        .replace(/;/gi, ' ')
        .toUpperCase()
        .split(' ')
        .map(el => el.split(':').reverse().join(', '))
        .sort()
        .map(el => `(${el})`)
        .join('')
}

// console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))


// Holly cats
// Description:
// My granny has several cats. Most of them are wicked, some are normal and some of them are the likes of ^(~_~)^ aka holy cats.
// So my granny asked me to separate the holy cats from the rest of the crew. But I don't know how to do it.
// Can you help me separate the holy cats from the rest? In case there are no holy cats in the group, return an empty array.

function holycats(input) {
    return input.filter(v => v !== 'wicked').filter(v => v !== 'normal')
}


// //Doors in the school
//
//
// In the morning all the doors in the school are closed. The school is quite big: there are N doors. Then pupils start coming. It might be hard to believe, but all of them want to study! Also, there are exactly N children studying in this school, and they come one by one.
// When these strange children pass by some doors they change their status (i.e. Open -> Closed, Closed -> Open). Each student has their number, and each i-th student alters the status of every i-th door. For example: when the first child comes to the schools, he changes every first door (he opens all of them). The second one changes the status of every second door (he closes some doors: the 2nd, the 4th and so on). Finally, when the last one – the n-th – comes to the school, he changes the status of each n-th door (there's only one such door, though).
// You need to count how many doors are left opened after all the students have come.
// Example:
// Here you can see red squares – closed doors, green – opened ones.
// Input:
// n – the number of doors and students, n ∈ N, n ∈ [1, 100000]
// Output:
// o – the number of opened doors, o ∈ N
// doors(5)
// Should return 2

const doors2 = n => Math.sqrt(n) | 0


// Exercise in Summing

// Your task is to finish two functions, minimumSum and maximumSum, that take 2 parameters:
// values: an array of integers with an arbitrary length; may be positive and negative
// n: how many integers should be summed; always 0 or bigger
// Example:
// var values = [5, 4, 3, 2, 1];
// minimumSum(values, 2); // should return 1+2 = 3
// maximumSum(values, 3); // should return 3+4+5 = 12
// All values given to the functions will be integers. Also take care of the following special cases:
// if values is empty, both functions should return 0
// if values is empty, both functions should return 0
// if n is 0, both functions should also return 0
// if n is larger than values's length, use the length instead.

function minimumSum(values, n) {
    values = values.sort((a, b) => a - b);
    return values.slice(0, n).reduce((a, b) => a + b, 0)
}

function maximumSum(values, n) {
    values = values.sort((a, b) => b - a);
    return values.slice(0, n).reduce((a, b) => a + b, 0)
}


// Pizza pieces
// Description:
// In her trip to Italy, Elizabeth Gilbert made it her duty to eat perfect pizza. One day, she ordered one for dinner. And then some Italian friends appeared at her room.
// The problem is that there were many people who ask for a piece of pizza at that moment. And she had a knife that only cuts straight.
// Given a number K (K<=45000), help her get the maximum number of pieces possible (not necessarily of equal size) with K cuts. If K is a negative number, the result must be -1 (or Nothing in Haskell).
// Examples
// maxPizza(0) == 1
// maxPizza(1) == 2
// maxPizza(3) == 7

function maxPizza(cut) {
    if (cut < 0) return -1
    else if (cut === 0) return 1
    return (cut * (cut + 1) / 2) + 1
}

// console.log(maxPizza(3))

const sortByGivenNumbers2 = (str) => {
    return str.split(' ').map(el => el.replace(/[a-zа-яё]/gi, '') + el).sort().map(el => el.slice(1)).join(' ')
}
console.log(sortByGivenNumbers2("is6 Thi5s T8est 7a")) //"Thi5s is6 7a T8est"

