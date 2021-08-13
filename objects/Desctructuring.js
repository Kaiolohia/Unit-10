/*
The first code snippet will print out
    8
    1846
*/

/*
the second code snippet will print out an object containing the rest of the items in planet facts excluding num planets
    {
        yearNeptuneDiscorvered : 1846,
        yearMarsDiscovered : 1659
    }
*/

/*
    this snippet will return:
    "Your name is Alejandro and you like purple"
    "Your name is Melissa and you like green"
    "Your name is undefined and you like green"
*/

/*
    this snippet will print the following:
    "Maya"
    "Marisa"
    "Chi"
*/

/*
    this snippet will print out:
    "Raindrops on roses"
    "whiskers on kittens"
    [
        "Bright copper kettles",
        "warm woolen mittens",
        "Brown paper packages tied up with strings"
    ]
*/

/*
    This snippet will print out:
    [
        20,
        10,
        30
    ]
*/

const obj = {
    numbers : {
        a : 1,
        b : 2
    }
}
const { numbers : { a, b }} = obj

const arr = [1,2]
const swapped = [arr[0], arr[1]] = [arr[1], arr[0]]

const raceResults = ([first, second, third, ...rest]) => {{first, second, third, rest}}