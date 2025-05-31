const individual = ["tomi", "tumi","tola","tolu","bola","bolu","ola","olu"]
const persons = [...individual]
// let people = individual.toString()

let people = individual.join(" and ")


let peoples = individual.concat(persons)
peoples.splice(1,2, "bill", "bob")

console.log(persons.length)

// console.log(individual)
console.log(peoples)


console.log(persons.pop())
console.log(persons)

let lengt = individual.push("tomi")
console.log(lengt)


persons.sort()
persons.reverse()
console.log(persons)


const numbers1 = [1,2,4]

function myfunction(value: number) {
    return value * 2;
}

let number2 = numbers1.map(myfunction)

console.log(number2)

