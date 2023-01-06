function myPerson(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}

let person1 = new myPerson('Nadia', 'Koluzaeva')
let person2 = new myPerson('Stive', 'Jobs')
console.log(person1.first_name, person1.last_name);
console.log(`${person2.first_name} ${person2.last_name}`)

////////////////////JavaScript Es6 after 2015

class Animal {
    constructor(name, eyes) {
        this.name = name;
        this.eyes = eyes;
    }

    getName() {
        return (`The name of the animal is ${this.name}`)
    }

    catEat() {
        console.log('This animal can eat')
    }
}

let animal1 = new Animal("tiger");
let animal2 = new Animal('salmon', 'blue')

console.log(animal1.name)
console.log(animal1.getName())
console.log(animal2.eyes)
animal2.catEat()
console.log("+++++++++++++++++++++++++++++++++++++++")
class Animal {
    constructor(name, eyes) {
        this.name = name;
        this.eyes = eyes;
    }

    getName() {
        return (`The name of the animal is ${this.name}`)
    }

    catEat() {
        console.log('This animal can eat')
    }
}

let animal1 = new Animal("tiger");
let animal2 = new Animal('salmon', 'blue')

console.log(animal1.name)
console.log(animal1.getName())
console.log(animal2.eyes)
animal2.catEat()