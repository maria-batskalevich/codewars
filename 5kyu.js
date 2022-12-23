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
function generateHashtag (str) {
    let arr=str.split(' ').map(v=>v.slice(0,1).toUpperCase()+v.slice(1)).join('')
    if (arr.length>139||arr==='') return false
    return '#'+arr
}