const number = [1,2,3,4,5,6,7,8,9,10]
const slicedNumber = number.slice(2, /* Before the index (6) */ 6)
console.log(slicedNumber);
console.log(number); // No changed in main array


// Splice()
const splicedNumber = number.splice(1, 2)
console.log(splicedNumber);
console.log(number); // changed in main array