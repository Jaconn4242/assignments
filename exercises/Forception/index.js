const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"


// function forception(people, alphabet){
//     let result = []
//     for(let i = 0; i <= people.length; i++){
//         result.push(people[i])
        
//         for(let j = 0; j <= alphabet.length; j++){
//             result.push(alphabet[j])
//         }
//     }
//     return result.push(result)
// }
// console.log(result)

const forception = () => {
    let result = new Array()
    for(const person of people){
        result.push(person)
            for(const letter of alphabet){
                result.push(letter)
            }
    }
    return result
}

console.table(forception(people, alphabet))



