// Unlimited number adding as arguments

function sum(){
    let result = 0
    for(const element of arguments){
        result += element
    }
    return result
}
console.log(sum(5, 4, 5, 100));