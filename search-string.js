const products = [
    "Awesome Black color laptop",
    "Awesome Green color laptop",
    "Awesome Yellow color laptop",
    "Brand new phone",
    "Symphony phonE",
    "I love my Phone"
]




const searchingStrings = "laptop"
const output = []

// Using indexOf()
for(const product of products) {
    if(product.toUpperCase().indexOf(searchingStrings.toUpperCase()) != -1){
        output.push(product)
    }
}
console.log(output);



// Using includes()
for(const product of products) {
    if(product.toUpperCase().includes(searchingStrings.toUpperCase())){
        output.push(product)
    }
}
console.log(output);




// Searching by startsWith
for(const product of products){
    if(product.startsWith("Awesome")){
        output.push(product)
    }
}
console.log(output);




// Searching by endsWith
for(const product of products){
    if(product.endsWith("laptop")){
        output.push(product)
    }
}
console.log(output);