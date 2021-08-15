/*
Q1: When conole.log'd the set returns {1,2,3,4}
*/ 
/*
Q2: The code returns 'ref" because the rest of the word contains only r and e's and because its a set first only one of each value can be in a set
*/
/*
Q3: m = { [ 1, 2, 3 ] => true, [ 1, 2, 3 ] => false} We get both true and false because of array identities, we set the key to the memory allocation of the array instead of the values
        so we get two different keys, if we used a value like int, str, float, etc we wouldnt have this issue
*/

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

console.log(m)

function hasDuplicates(arr) {
    let tempSet = new Set(arr)
    return tempSet.size !== arr.length
}
console.log(hasDuplicates([1,2,3,4,4]))

function vowelCount(str) {
    let tempMap = new Map();
    const vowels = 'aeiou'
    str = str.toLowerCase()
    for(let letter of str) {
        if (vowels.includes(letter)){
            if(tempMap.get(letter)) {
                tempMap.set(letter, tempMap.get(letter) + 1)
            } else {
                tempMap.set(letter, 1)
            }
        }
        
    }
    return tempMap
}
console.log(vowelCount('This has a lot of vowels in it'))