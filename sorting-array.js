const numbers = [3,5,7,6,1,8,4,2,9]
const sortedNumbers = numbers.sort().reverse()
console.log(sortedNumbers);





// Big / dubbles numbers array sorting
const bigNumbers = [66,58,81,82,9,6,37,13,2]
const bigNumbersSorted = bigNumbers.sort(function (x, y) { // Compare function for big / dubbles numbers array (normal sort doesn't work)
    return x - y
})
console.log(bigNumbersSorted);