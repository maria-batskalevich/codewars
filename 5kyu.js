//---------------------------------- 5 kyu ------------------------------------------------------

//Find the unique string
//There is an array of strings. All strings contains similar letters except one. Try to find it!
//
// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.
//
// It’s guaranteed that array contains more than 2 strings.
function findUniq(arr) {
    let newArr = arr.map(el => el.toLowerCase()
        .trim()
        .split('')
        .filter((el, index, arr) => arr.indexOf(el) === index)
        .sort()
        .join(''))
        .sort()
    console.log(newArr)
    let findElement = newArr[0][0] === newArr[1][0] ? newArr.pop() : newArr[0]
    console.log(findElement)
    let answer = arr.find(el => {
        if (findElement === '') {
            return el.trim() === '';
        }
        return findElement.split('').every(l => {
            return el.toLowerCase().split('').includes(l)
        })
    })
    return answer
}

//The Hashtag Generator
//The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
//
// Here's the deal:
//
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false
function generateHashtag(str) {
    let arr = str.split(' ').map(v => v.slice(0, 1).toUpperCase() + v.slice(1)).join('')
    if (arr.length > 139 || arr === '') return false
    return '#' + arr
}

//Maximum subarray sum
//The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

function maxSequence(arr) {
    let currentSum = 0
    let maxSum = 0
    if (arr.length === 0) {
        return 0
    }
    arr.forEach(a => {
        currentSum = Math.max(a, currentSum + a)
        maxSum = Math.max(maxSum, currentSum)
    })
    return maxSum
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

//Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
//
// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
//
// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):
//
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
// You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place!
// So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
// ["WEST"]
// or
// { "WEST" }
// or
// [West]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is []
// (nil in Clojure).
//
// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become
// directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].
//
// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless
// directions removed (W<->E or S<->N side by side).
//
// The Haskell version takes a list of directions with data Direction = North | East | West | South.
// The Clojure version returns nil when the path is reduced to nothing.
// The Rust version takes a slice of enum Direction {North, East, West, South}.
// See more examples in "Sample Tests:"
// Notes
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible.
// "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such.
// Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
// if you want to translate, please ask before translating.
function dirReduc(arr) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "NORTH" && arr[i + 1] === "SOUTH"
            || arr[i] === "SOUTH" && arr[i + 1] === "NORTH"
            || arr[i] === "EAST" && arr[i + 1] === "WEST"
            || arr[i] === "WEST" && arr[i + 1] === "EAST") {
            i++
        } else {
            if (result[result.length - 1] === "NORTH" && arr[i] === "SOUTH"
                || result[result.length - 1] === "SOUTH" && arr[i] === "NORTH"
                || result[result.length - 1] === "EAST" && arr[i] === "WEST"
                || result[result.length - 1] === "WEST" && arr[i] === "EAST") {
                result.pop()
            } else {
                result.push(arr[i])
            }
        }
    }
    return result
}

console.log(dirReduc(arr))

//Human Readable Time
//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
//
// You can find some examples in the test fixtures.

function humanReadable(seconds) {
    if (seconds < 0 || seconds > 360000) {
        return null;
    }
    let hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    if (hours < 10) {
        hours = '0' + hours;
    }
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
}

console.log(humanReadable(3600))