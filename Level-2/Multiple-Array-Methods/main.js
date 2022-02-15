// You should use multiple array methods to solve these problems. Don't use for loops!
// Using the provided peopleArray (bottom of this article), write a function that:
//1. Returns a list of everyone older than 18, which is
// 2. sorted alphabetically by last name, and where
// 3. each name and age is embedded in a string that looks like an HTML `<li>` element.


var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortOfAge(arr){

    let lastNameSort = arr.sort((a, b) => {
        if(a.lastName < b.lastName){
            return -1
        }
        if(a.lastName > b.lastName){
            return 1
        }
        return 0
    }) 
        
    const newNew = lastNameSort.reduce((final, person) => {
        if( person.age >= 18)

            final.push("<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>")
                return final

    }, [])
    return newNew

}
console.log(sortOfAge(peopleArray))


