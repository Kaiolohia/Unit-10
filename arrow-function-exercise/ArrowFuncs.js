const double = arr => arr.map(val => val *2)

const squareAndFindEvens = numbers => {
    const squares = numbers.map(num => num ** 2)
    return squares.filter(square => square % 2 === 0)
}
