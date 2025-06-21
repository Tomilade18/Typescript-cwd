// const individual = ["tomi", "tumi","tola","tolu","bola","bolu","ola","olu"]
// const persons = [...individual]
// // let people = individual.toString()

// let people = individual.join(" and ")


// let peoples = individual.concat(persons)
// peoples.splice(1,2, "bill", "bob")

// console.log(persons.length)

// // console.log(individual)
// console.log(peoples)


// console.log(persons.pop())
// console.log(persons)

// let lengt = individual.push("tomi")
// console.log(lengt)


// persons.sort()
// persons.reverse()
// console.log(persons)


// const numbers1 = [1,2,4]

// function myfunction(value: number) {
//     return value * 2;
// }

// let number2 = numbers1.map(myfunction)

// console.log(number2)

class Tomi {
    static nextid = 1;
    list: string [] = []
    id: number

    constructor(list: string[]){
        this.list = list
        this.id = Tomi.nextid++
    }

    addMember(name: string): void{
        this.list.push(name)
        console.log(`${name} was added`)
    }

    removeMember(name: string){
        const index = this.list.findIndex(member => member === name)
        if (index !== -1) {
            const deleted = this.list.splice(index, 1)[0];
            console.log(`${deleted} has been removed`)
        } else {
            console.log(`name not found`)
        }
    }

    removeLastMember(){
        if(this.list.length > 5){
            this.list.pop()
        }
    }

    listMembers(){
        if (this.list.length !== 0){ 
            this.list.sort()
            console.log(this.list.toString())       
        } else {
            console.log('List is currently empty')
        }
    }

    capitalizeMember(){
    const capitalmember = this.list.map(member => member.toUpperCase())
    console.log(capitalmember)
    }
}

const tumi = new Tomi([])
tumi.addMember('Bola')
tumi.addMember('Obu')
tumi.addMember('Olu')
tumi.addMember('Obe')
tumi.addMember('Obi')
tumi.addMember('Obi')
tumi.addMember('ibu')
console.log(tumi)
tumi.removeMember('Bola')
console.log(tumi)
tumi.removeLastMember()
console.log(tumi)
tumi.capitalizeMember()
console.log(tumi)