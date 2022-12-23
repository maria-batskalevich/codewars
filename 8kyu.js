//---------------------------------- 8 kyu ------------------------------------------------------

//Multiply
//This code does not execute properly. Try to figure out why.
function multiply(a, b){
    return a * b
}

//Multiplication table for number
//Your goal is to return multiplication table for number that is always an integer from 1 to 10.
// For example, a multiplication table (string) for number == 5 looks like below:
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// P. S. You can use \n in string to jump to the next line.
// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.
function multiTable(number) {
    let table = '';
    for(let i = 1; i <= 10; i++){
        table += `${i} * ${number} = ${i*number}\n`
    }
    return table.slice(0, -1)
}

//Grasshopper - Summation
//Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// For example (Input -> Output):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
let summation = function (num) {
    return num * (num + 1) / 2;
}

//Find the smallest integer in the array
//Given an array of integers your solution should find the smallest integer.
//
// For example:
//
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallArg = args[0];
        for(let i = 0; i <= args.length-1; i++){
            if (args[i] <= smallArg) {
                smallArg = args[i];
            }
        }
        return smallArg;
    }
}

//Sum of positive
//You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            result += arr[i];
        }
    }
    return result;
}

//Remove String Spaces
//Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
    return x.split(' ').join('');
}

//Opposite number
//Very simple, given an integer or a floating-point number, find its opposite.
function opposite(number) {
    return -number;
}

//Remove First and Last Character
//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str){
    return str.slice(1, str.length - 1);
}

//Convert boolean values to strings 'Yes' or 'No'.
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
    return bool ? 'Yes' : 'No';
}

//The Wide-Mouthed frog!
//The wide-mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat.
// But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!
// When he meets the alligator, it then makes a tiny mouth.
// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which
// corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small
// otherwise return wide.
function mouthSize(animal) {
    return animal.toLowerCase() === 'alligator' ?  'small': 'wide';
}

//MakeUpperCase
//Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
    return str.toUpperCase()
}

//Reversed Words
//Complete the solution so that it reverses all of the words within the string passed in.
function reverseWords(str){
    return str.split(' ').reverse().join(' ')
}

//Quarter of the year
//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
//
// For example: month 2 (February), is part of the first quarter; month 6 (June),
// is part of the second quarter; and month 11 (November), is part of the fourth quarter.
const quarterOf = (month) => {
    return Math.ceil(month/3)
}

//Simple multiplication
//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
    return number%2 === 0 ? number*8 : number*9
}

//Get the mean of an array
//It's the academic year's end, fateful moment of your school report. The averages must be calculated.
// All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.
function getAverage(marks){
    return Math.floor(marks.reduce((a, b) => a + b) / marks.length)
}

//Convert number to reversed array of digits
//Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]
function digitize(n) {
    n = String(n).split('').reverse().map(Number);
    return n;
}

//What's the real floor?
//Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
// Write a function that given a floor in the american system returns the floor in the european system.
// With the 1st floor being replaced by the ground floor and the 13th floor being removed,
// the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
// Basements (negatives) stay the same as the universal level.
// More information here
// Examples
// 1  =>  0
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3
const getRealFloor =(n)=> n>0 && n<13 ? n-1 : n>13 ? n-2 : n

//Not so black box
//The kata has been preloaded with a function called blackBox. Figure out what the function does.
// You may need to think laterally!
blackBox();
console.log(blackBox());
JSopenSesame()

//Watermelon
//Removed due to copyright infringement.
function divide(weight){
    return weight>2&&weight%2===0;
}

//Grasshopper - Basic Function Fixer
//Fix the function
// I created this function to add five to any number that was passed in to it and return the new value.
// It doesn't throw any errors but it returns the wrong number.
//
// Can you help me fix the function?
function addFive(num) {
    return num + 5
}

//Grasshopper - Variable Assignment Debug
//Variable assignment
// Fix the variables assigments so that this code stores the string 'devLab' in the variable name.
let a = "dev"
let b = "Lab"
let name = a + b

//Compare within margin
//Create a function close_compare that accepts 3 parameters: a, b, and an optional margin.
// The function should return whether a is lower than, close to, or higher than b.
// a is considered "close to" b if margin is greater than or equal to the distance between a and b.
// Please note the following:
// When a is close to b, return 0.
// Otherwise...
// When a is less than b, return -1.
// When a is greater than b, return 1.
// If margin is not given, treat it as zero.
// Assume: margin >= 0
// Tip: Some languages have a way to make parameters optional.
function closeCompare(a, b, margin=0){
    if(Math.abs(a-b) <= margin) return 0
    if(a<b) return -1
    return 1
}

//Drink about
//Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.
//
// Rules:
//
// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)
function peopleWithAgeDrink(old) {
    if(old<14) return 'drink toddy'
    if(old<18) return 'drink coke'
    if(old<21) return 'drink beer'
    else return 'drink whisky'
}

//What is between?
//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]
function between(a, b) {
    let arr = []
    for(let i = a; i<=b; i++){
        arr.push(i)
    }
    return arr
}

//Calculate average
//Write a function which calculates the average of the numbers in a given list.
//
// Note: Empty arrays should return 0.
function find_average(array) {
    return array.length>0 ?
        array.reduce((a,b)=>a+b)/array.length : 0
}

//Find the Remainder
//Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
// Division by zero should return NaN.
//Examples:
//n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)
function remainder(a, b){
    return (a > b ? a % b : b % a)
}

//Calculate BMI
//Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let bmi = weight / Math.pow(height,2)
    if (bmi <= 18.5) return "Underweight"
    else if (bmi <= 25.0) return "Normal"
    else if (bmi <= 30.0) return "Overweight"
    else if (bmi > 30) return "Obese"
}

//Opposites Attract
//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
//
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
function lovefunc(flower1, flower2){
    return (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower2 % 2 === 0 && flower1 % 2 !== 0);
}

//Beginner - Lost Without a Map
//Given an array of integers, return a new array with each value doubled.
//
// For example:
//
// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    return x.map(i => i * 2)
}

//Gravity Flip
//If you've completed this kata already and want a bigger challenge, here's the 3D version
//
// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.
//
// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.
//
// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+
// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.
//
// Examples (input -> output:
// * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]
const flip=(d, a)=> (d === 'L') ? a.sort((a, b) => b - a) : a.sort((a, b) => a - b)

//Pillars
//There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
//
// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
function pillars(num_pill, dist, width) {
    return num_pill === 1 ? 0 : dist*100*(num_pill-1) + (num_pill-2)*width
}

//Points of Reflection
//"Point reflection" or "point symmetry" is a basic concept in geometry where a given point, P, at a given position relative to a mid-point, Q has a corresponding point, P1, which is the same distance from Q but in the opposite direction.
//
// Task
// Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the point's X and Y coordinates. Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.
//
// This kata was inspired by the Hackerrank challenge Find Point
function symmetricPoint(p, q) {
    return [2 *q[0]-p[0], 2*q[1]-p[1]]
}

//Count Odd Numbers below n
//Given a number n, return the number of positive odd numbers below n, EASY!
//
// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!
const oddCount = n => Math.floor(n / 2)

//Is the date today
//Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.
//
// Make sure that your function does not return a false positive by only checking the day.
const isToday = (date) => {
    let today = new Date();
    return today.getFullYear() + today.getMonth() + today.getDate() === date.getFullYear() + date.getMonth() + date.getDate();
}

//Convert a string to an array
//Write a function to split a string and convert it into an array of words.
//
// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]
//
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
function stringToArray(string){
    return string.split(' ')
}

//A wolf in sheep's clothing
//Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
//
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
//
// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
//
// Note: there will always be exactly one wolf in the array.
//
// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
//
// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"
function warnTheSheep(queue) {
    return queue.reverse().indexOf('wolf') === 0
        ? 'Pls go away and stop eating my sheep'
        : `Oi! Sheep number ${queue.indexOf('wolf')}! You are about to be eaten by a wolf!`
}

//Online RPG: player to qualifying stage?
//Let's imagine we have a popular online RPG. A player begins with a score of 0 in class E5. A1 is the highest level a player can achieve.
//
// Now let's say the players wants to rank up to class E4. To do so the player needs to achieve at least 100 points to enter the qualifying stage.
//
// Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.
//
// In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".
//
// Otherwise return, False/false (according to the language in use).
//
// NOTE
// : Remember, in C# you have to cast your output value to Object type!
function playerRankUp (points) {
    return points>=100
        ? 'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.'
        : false
}

//Convert a String to a Number!
//Note: This kata is inspired by Convert a Number to a String!. Try that one too.
//
// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?
//
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
//
// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7
const stringToNumber = function(str){
    return +str
}

//Jenny's secret message
//Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
//
// Can you help her?
function greet(name){
    if(name === "Johnny")
        return "Hello, my love!";
    else {
        return "Hello, " + name + "!";
    }
}

//Square(n) Sum
//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
function squareSum(numbers){
    return numbers.map(m=> m*m).reduce((acc, num) => acc + num, 0)
}

//Find Maximum and Minimum Values of a List
//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
//
// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.
let min = function (list) {
    list.sort((a, b) => a - b)
    return list[0];
}
let max = function (list) {
    list.sort((a, b) => b - a)
    return list[0];
}
