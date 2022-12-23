//---------------------------------- 7 kyu ------------------------------------------------------

//Sum of two lowest positive integers
//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
function sumTwoSmallestNumbers(numbers) {
    let arr = numbers.sort((a, b) => a - b);
    return arr[0] + arr[1];
}

//Next Prime
//Get the next prime number!
//
// You will get a numbern (>= 0) and your task is to find the next prime number.
//
// Make sure to optimize your code: there will numbers tested up to about 10^12.
//
// Examples
// 5   =>  7
// 12  =>  13
function nextPrime(n){
    let count=0;
    for(let i=n+1;i>0;i++){
        if (isPrime(i)){count = i; break}
    }
    return count
}

function isPrime(n) {
    let rt = Math.sqrt(n);
    for(let i = 2; i <= rt; i++) {
        if(n % i === 0) return false;
    }
    return n !== 1;
}

//Sort with a sorting array
//Sort an array according to the indices in another array. It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.
//
// initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]
//
// sort(initialArray, sortingArray) => ['z', 'x', 'y']
//
// sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']
function sort(initialArray, sortingArray) {
    let arr = [];
    for(let i = 0; i < initialArray.length; i++)
        arr[sortingArray[i]] = initialArray[i]
    return arr
}

//Sorting Arrays ... wait, what?!
// Sorting an array of positive integers
// Background
// You are a(n) novice/average/senior/professional/world-class (choose one)
// Computer Scientist and Web Developer who specialises in Javascript (choose the language of your choice).
// One day, while you were away, your naughty little brother fiddles with your computer and somehow manages
// to disable the sort() method for arrays!
//
// Task
// Being the developer that you are, you decide to fix the sort() method so that it works for any array
// consisting of only positive integers. You may use any algorithm you wish.
//
// Extension
// If you wish, you could also fix the sort() method for arrays such that it also works on String arrays
// (sorting them into alphabetical order) but please note that it is not required and will not be tested.
Array.prototype.sort = function(){
    const arr=this.slice();
    for (let i=0; i<arr.length;i++){
        for (let j=0; j<arr.length;j++){
            if (arr[j]>arr[j+1]){
                let temp = arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}

//Alphabetical Grid
//Task:
// You need to write a function grid that returns an alphabetical grid of size NxN, where a = 0, b = 1, c = 2....
//
// Examples:
// grid(4)
//
// a b c d
// b c d e
// c d e f
// d e f g
// grid(10)
//
// a b c d e f g h i j
// b c d e f g h i j k
// c d e f g h i j k l
// d e f g h i j k l m
// e f g h i j k l m n
// f g h i j k l m n o
// g h i j k l m n o p
// h i j k l m n o p q
// i j k l m n o p q r
// j k l m n o p q r s
// Notes:
// After "z" comes "a"
// If function receive N < 0 should return:
// null
function grid(n) {

    if(n < 0) return null;

    let letters = "abcdefghijklmnopqrstuvwxyz";
    let result = [];

    while(n * n > letters.length) {
        letters += letters;
    }

    for(let i = 0; i < n; i++) {
        let row = '';

        for(let j = i; j < n + i; j++) {
            row = row + letters.substr(j, 1)
        }

        row = row.split('').join(' ') + '\n';

        result.push(row)
    }

    return result.join('').slice(0, -1);
}

//Money Match: Double or Nothing
//My roommate and I occasionally make wagers on if we can beat each other in Super Smash Bros. Being the competitor I am, I can't take a loss without getting a chance at redemption. Often times, this manifests in the form of a "Double or nothing" bet. Rather than paying up, the wager will instead be doubled, and an additional round will be played.
//
// ...This consistently results in me losing more money than I initially wagered.
//
// Given the amount of cash on hand, the initial wager, and the number of rounds played, return the amount of money that I'll have left after our gam(bl)ing session has concluded.
//
// If I can't afford to pay up, return "I'll pay you back later" instead ;)
function doubleOrNothing(cash, wager, losses){
    for(let i = 1; i< losses; i++) {
        wager *=2
    }
    if(wager > cash){
        return "I'll pay you back later"
    }  else {
        return cash-wager
    }
}

//Adding Arrays
//Create a function that takes an array of letters, and combines them into words in a sentence.
//
// The array will be formatted as so:
//
// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]
// The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.
//
// Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).
//
// Examples:
//
// arrAdder([
// ['J','L','L','M'],
// ['u','i','i','a'],
// ['s','v','f','n'],
// ['t','e','e','']
// ]) // => "Just Live Life Man"
//
// arrAdder([
//   [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
//   [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
//   [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
//   [ '', 'o', '', '', 'e', '', '', 'l' ],
//   [ '', 'c', '', '', 'r', '', '', '' ],
//   [ '', 'h', '', '', 'h', '', '', '' ],
//   [ '', 'o', '', '', 'o', '', '', '' ],
//   [ '', 'n', '', '', 'u', '', '', '' ],
//   [ '', 'd', '', '', 's', '', '', '' ],
//   [ '', 'r', '', '', 'e', '', '', '' ],
//   [ '', 'i', '', '', '', '', '', '' ],
//   [ '', 'a', '', '', '', '', '', '' ] ]) // => "The Mitochondria is the powerhouse of the cell"
function arrAdder(arr) {
    let newArrStr = []
    for(let i = 0; i<arr[0].length; i++){
        newArrStr[i] = arr.map(m=> m[i] ).join('')

    }
    return newArrStr.join(' ')
}

//Minimum Steps (Array Series #6)
//Task
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
//
// Notes:
// List size is at least 3.
//
// All numbers will be positive.
//
// Numbers could occur more than once , (Duplications may exist).
//
// Threshold K will always be reachable.
//
// Input >> Output Examples
// minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
function minimumSteps(numbers, value){
    numbers=numbers.sort((a,b)=>a-b)
    for (let i=1;i<=numbers.length;i++){
        if (numbers.slice(0,i).reduce((a,b)=>a+b,0)>=value) return i-1
    }
}

//Small enough? - Beginner
//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
//
// You can assume all values in the array are numbers.
function smallEnough(a, limit){
    return a.every(m=> m<=limit)
}

//Ordered Count of Characters
//Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
//
// Consult the solution set-up for the exact data structure implementation depending on your language.
//
// Example:
//
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
let orderedCount = function (text) {
    let letters = text.split("")
    let uniqs = letters.filter((letter, index) => letters.indexOf(letter) === index)

    return uniqs.map((letter) => [letter, text.split(letter).length - 1])
}

//Printer Errors
//In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
//
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
//
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
//
// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
//
// The string has a length greater or equal to one and contains only letters from ato z.
//
// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"
//
// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"
function printerError(s) {
    let arr = s.split('')
    let correctLetters = 'abcdefghijklm'
    let correctArr = correctLetters.split('')
    let count = 0
    arr.map(m => !correctArr.includes(m) ? count++ : count+=0)
    return `${count}/${s.length}`
}

//Two to One
//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
function longest(s1, s2) {
    let res = [...s1.split(''), ...s2.split('')]
    return [...new Set(res)].sort().join('')
}

//Least Larger
//Task
// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).
//
// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.
//
// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
function leastLarger(a, i) {
    let min = Infinity
    let result = -1
    for(let index = 0; index<=a.length; index++){
        if(a[index]> a[i] && a[index]< min){
            min=a[index]
            result = index
        }
    }
    return result;
}

//Building blocks
//Write a class Block that creates a block (Duh..)
//
// ##Requirements
//
// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.
//
// Define these methods:
//
// `getWidth()` return the width of the `Block`
//
// `getLength()` return the length of the `Block`
//
// `getHeight()` return the height of the `Block`
//
// `getVolume()` return the volume of the `Block`
//
// `getSurfaceArea()` return the surface area of the `Block`
// Examples
//     let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
//     b.getWidth() // -> 2
//
//     b.getLength() // -> 4
//
//     b.getHeight() // -> 6
//
//     b.getVolume() // -> 48
//
//     b.getSurfaceArea() // -> 88
// Note: no error checking is needed
//
// Any feedback would be much appreciated
const Block = function (data){
    this.width = data[0]
    this.length = data[1]
    this.height = data[2]

    this.getWidth = function() {
        return this.width
    }
    this.getLength = function() {
        return this.length
    }
    this.getHeight = function() {
        return this.height
    }
    this.getVolume = function(){
        return this.width*this.length*this.height
    }
    this.getSurfaceArea = function() {
        return 2 * (this.width + this.length) * this.height + 2 * this.width * this.length
    }
}

//Simple Fun #10: Range Bit Counting
//Task
// You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.
//
// Example
// For a = 2 and b = 7, the output should be 11
//
// Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7]. Converting the numbers to binary, we get [10, 11, 100, 101, 110, 111], which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.
//
// Input/Output
// [input] integer a
// Constraints: 0 ≤ a ≤ b.
//
// [input] integer b
// Constraints: a ≤ b ≤ 100.
//
// [output] an integer
function rangeBitCount(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    let arrayOfOne = String(arr.map(m => m.toString(2))).split('').filter(f=> (f !== ',')).map(m => +m)
    let sum = 0;
    arrayOfOne.forEach(item => {
        sum += item
    })
    return sum;
}

//Sort Numbers
//Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
//
// For example:
//
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []
function solution(nums){
    return nums !== null ? nums.sort((a,b) => a-b) : []
}

//Jaden Casing Strings
//Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
//
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
//
// Example:
//
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
String.prototype.toJadenCase = function () {
    var newStr = "";

    this.split(" ").forEach(function(s) {
        newStr = newStr + " " + s.substring(0,1).toUpperCase() + s.substring(1);
    });

    return newStr.substr(1);
}

//Sum of angles
//Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
const angle = n => (n - 2) * 180;

//Especially Joyful Numbers
//Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers.
// The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...
//
// We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed,
// gives the original number n. For example consider number 1729:
//
// its digit sum, s = 1 + 7 + 2 + 9 = 19
// reversing s = 91
// and 19 * 91 = 1729 --> the number that we started with.
// Complete the function which tests if a positive integer n is Harshad number,
// and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.
function numberJoy(n) {
    let sum = n.toString().split('').reduce((a, b) => +a + +b)
    let sumReverse = +sum.toString().split('').reverse().join('')
    return sum * sumReverse === n
}

//True Min
//The Math.min function has stopped working, so we have to use our own function. We are off to a good start, but this function doesn't seem to handle everything properly. Add in the proper checks to return NaN for anything that isn't an actual number, except treat null like 0.
//
// Note: This min function need not handle more than two arguments.
//
// function min(a, b){
//   return (a<b)?a:b;
// }
function min(a, b){
    if(isNaN(a)||isNaN(b)) {
        return NaN
    } else if(a<b){
        return +a
    } else {
        return +b
    }
}

//Square Every Digit
//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//
// Note: The function accepts an integer and returns an integer
function squareDigits(num){
    return +num.toString().split('').map(el=> el**2).join('')
}