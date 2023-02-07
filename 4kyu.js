//---------------------------------- 4 kyu ------------------------------------------------------

//Your task in order to complete this Kata is to write a function which formats a duration,
// given as a number of seconds, in a human-friendly way.
// The function must accept a non-negative integer. If it is zero, it just returns "now".
// Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
// It is much easier to understand with an example:
// * For seconds = 62, your function should return
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.
// Note that spaces are important.
// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer
// and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.
//
// The components are separated by a comma and a space (", "). Except the last component,
// which is separated by " and ", just like it would be written in English.
//
// A more significant units of time will occur before than a least significant one.
// Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
//
// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
//
// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid,
// but it should be just 1 minute.
//
// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds,
// but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater
// than any valid more significant unit of time.

function formatDuration(seconds) {
    if (seconds === 0) {
        return 'now';
    }
    const numYears = Math.floor(seconds / (86400 * 365));
    const numDays = Math.floor(seconds % (86400 * 365) / 86400);
    const numHours = Math.floor(((seconds % (86400 * 365)) % 86400) / 3600);
    const numMinutes = Math.floor((((seconds % (86400 * 365)) % 86400) % 3600) / 60);
    const numSeconds = (((seconds % (86400 * 365)) % 86400) % 3600) % 60;

    const secondsFun = function () {
        return (numSeconds ? (((seconds > 60) ? ' and ' + numSeconds + " second" : +numSeconds + " second") + (numSeconds === 1 ? '' : 's')) : '');
    };
    const minutesFun = function () {
        if (numSeconds === 0 && numDays !== 0) {
            return 'and ' + (numMinutes ? numMinutes + " minute" + (numMinutes === 1 ? '' : 's') : '');
        }
        return (numMinutes ? numMinutes + " minute" + (numMinutes === 1 ? '' : 's') : '');
    };
    const hoursFun = function () {
        if (minutesFun().charAt(0) === 'a') {
            return (numHours ? numHours + " hour" + (numHours === 1 ? ' ' : 's ') : '');
        }
        if (numSeconds === 0 && numMinutes === 0) {
            return (numHours ? numHours + " hour" + (numHours === 1 ? '' : 's ') : '');
        }
        if(numMinutes === 0) {
            return (numHours ? numHours + " hour" + (numHours === 1 ? ', ' : 's') : '');
        }
        return (numHours ? numHours + " hour" + (numHours === 1 ? ', ' : 's, ') : '');
    };
    const daysFun = function () {
        return (numDays ? numDays + " day" + (numDays === 1 ? ', ' : 's, ') : '');
    };
    const yearsFun = function () {
        if(numHours === 0 && numDays === 0 && numMinutes === 0 && numSeconds === 0) {
            return (numYears ? numYears + " years" : '')
        }
        return (numYears ? numYears + " year" + (numYears === 1 ? ', ' : 's, ') : '');
    };
    return yearsFun() + daysFun() + hoursFun() + minutesFun() + secondsFun();
}


// console.log(formatDuration(9295201))

//Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element,
// traveling clockwise.
// array = [[1,2,3],
//           [4,5,6],
//           [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:
// array = [[1,2,3],
//           [8,9,4],
//           [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:
// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse
// the 2-d array in a clockwise snailshell pattern.
// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

let snail = function (array) {
    const moveRight = (count, result = []) => {
        result = [...result, ...array.shift()];
        return --count
            ? moveDown(count, result)
            : result;
    };
    const moveDown = (count, result) => {
        for (const arrInn of array) {
            result.push(arrInn.pop());
        }
        return --count
            ? moveLeft(count, result)
            : result;
    };
    const moveLeft = (count, result) => {
        result = [...result, ...array.pop().reverse()];
        return --count
            ? moveUp(count, result)
            : result;
    };
    const moveUp = (count, result) => {
        for (let i = array.length - 1; i >= 0; i--) {
            result.push(array[i].shift());
        }
        return --count
            ? moveRight(count, result)
            : result;
    }
    return moveRight(array.length * 2 - 1);
}
console.log(snail((array) => [1,2,3,4,5,6,7,8,9]))

//A format for expressing an ordered list of integers is to use a comma separated list of either
// individual integers or a range of integers denoted by the starting integer separated from the end integer
// in the range by a dash, '-'. The range includes all integers in the interval including both endpoints.
// It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly
// formatted string in the range format.
//
// Example:
//
// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

const solution = list => list

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))