const anthem = "Amr shunar bangla ami tomay valobashi"

// Split()
const words = anthem.split(" ") // it means without space . prottekta ke alada kore dekhabe
// console.log(words);


// Slice()
const slicing = anthem.slice( /* started form index (4) */ 4,/* ends before index (11) */11)
// console.log(slicing);



// substr()
const another = anthem.substr(4, 6) // selected index er por theke koyta index lagbe sheta bole dite hoy
// console.log(another);




// substring()
// This almost like slice




// Concat()
// const firstName = "Shfayet"
// const lastName = "Hossain"
// const fullName = firstName.concat(" ").concat(lastName)
// console.log(fullName);




// join()
const words2 = ["A","B","C","D"]
const allJoin = words2.join(" ") //join all the letter or words with space
console.log(allJoin);