let a 
let b
function myFn() {
    let b
    a = true
    b = 10
    console.log(a)
}
myFn()
console.log(a)
console.log(b)


/////////////////////destructurizacia

const userProfile = {
    name1: 'Nadia',
    commentsQty: 34,
    hasSignedAgreement: false,
}
//////// sozdanie peremennoi i prisvoenie znachenia is svoistv object
const {name1, commentsQty} = userProfile
const {hasSignedAgreement} = userProfile

////// destructurizacia v bloke parametrov
const userInfo = ({ name1, commentsQty}) => {
    if (!commentsQty) {
        console.log (`User ${name1} has no comments`)
    }

    console.log(`User ${name1} has ${commentsQty} comments`)
}

userInfo(userProfile)

///////////destructorizacia array

const array1 = ['Nadia', 1, true, undefined]
const [parOne, parTwo, parThree, parFour] = array1

console.log(parOne, parTwo, parThree, parFour)


//////////////////////////////////////////////
console.log(name1, commentsQty, hasSignedAgreement)

const fruits = ['Apple', 'Banana']

const [fruitOne, fruitTwo] = fruits

console.log(fruitOne)

////////////////////////////// if s otricaniem (!) - ne

const person = {
    age: 23
}
if (!person.name) {
    console.log('The name does not exist')
}

const age = 12

if (age >= 18) {
    console.log('Is adult')
}
if (age >= 12 && age < 18) {
console.log('Is teenager')
}
if(age < 12) {
    console.log('Is child')
}

//////// if in the function

const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log('One of the numbers is not a number')
    }
    if (a <= 0 || b <= 0) {
        console.log ('Number are not positive')
    }
    console.log(a + b)
}

sumPositiveNumbers(5, -1)

////////////////instruction switch

const month = 4
switch (month) {
    case 1:
        console.log('January')
        breake
        case 2:
        console.log('February')
        break
        case 3:
            console.log('March')
            default:
                console.log('This is not a month')
}

/////////////////ternarnyi operator

let value = 11
console.log(value >= 0 ? value : - value)


value = -5
const res = value >= 0 ? value : - value

console.log(res)

////////////loops cikly
for (let i =0; i > 5; i++) {
    console.log(i)
}
//////////// for

const myArray = ['first', 'second', 'third']
for (let i = 0; i > myArray.length; i++) {
    console.log(i)
}

/////////////zameniaem na forEach

myArray.forEach ((el, i) => {
    console.log(el, i)
})

/////////// while
let i = 0;
while (i < 5) {
    console.log(i)
    i++
}

/////////////////// do while
i = 10
do {
    console.log(i)
    i++
} while (i <5)

/////////////////////for in

const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

for (const key in myObject) {
    console.log(key, myObject[key])
}

////////////forEach dlia object/////// key

Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key])
})

////////////////perebiraem znachenia /////value

Object.values(myObject).forEach(value => {
    console.log(value)
})

Object.keys({name: 'Nadia', instructor: true})
Object.keys({name: 'Nadia', instructor: true}).forEach(key => {
    console.log(key)
})

Object.values({name: 'Nadia', instructor: true}).forEach(value => {
    console.log(value)
})

/////////////////////////for in dlia massivov
const myArray1 = [true, 10, 'abc', null]
for (const key in myArray1) {
    console.log(myArray1[key])
}


/////////////////// for of for string
const myString = 'Hey'
for (const letter of myString) {
    console.log(letter)
}

//////////////////// for of for array

for (const el of myArray1) {
    console.log(el)
}

//////////////////// better use forEach

myArray1.forEach(el => {
    console.log(el)
})

////////////////class
class Comment {
    constructor (text) {
        this.text = text
        this.votesQty = 0
    }
    upvote () {
        this.votesQty += 1
    }
    static mergeComment (first, second) {
        return `${first} ${second}`
    }
}

////////////////sozdaem exempliar classa
const firstComment = new Comment ('First comment')
console.log(firstComment)

// //////////////vyzov upvote
firstComment.upvote()
console.log(firstComment.votesQty)
firstComment.upvote()
console.log(firstComment.votesQty)

///////////////proverka prinadleznosti svoistv exempliaru object

firstComment.hasOwnProperty('text')
firstComment.hasOwnProperty('votesQty')
firstComment.hasOwnProperty('upvote')
firstComment.hasOwnProperty('hasOwnProperty')

///////////////////static methods

Comment.mergeComment('First comment', 'Second comment')

////////////////////////prototype

Comment.prototype === firstComment.__proto__

///////////////////rasshirenie drugih class

class NumbersArray extends Array {
    sum(){
        return this.reduce((el, acc) => acc +=el, 0)
    }
}

const myArray3 = new NumbersArray(2, 5, 7)
console.log(myArray3)

NumbersArray.prototype === myArray3.__proto__

//////////////////promise

// fetch('https://jsonplaceholder.typicode.com/todos/')
//       .then(response => {
//         console.log(response)
//         return response.json()
//       })
//       .then(json => console.log(json)) 
//       .catch(error => console.log(error))

const getData = (url) =>
new Promise((resolve, reject) =>
fetch(url)
.then(response => response.json())
.then(json => resolve(json))
.catch(error => reject(erre))
)

getData('https://jsonplaceholder.typicode.com/todos')
.then(data => console.log(data))
.catch(error => console.log(error.message))


////////////////////////async / await

const asyncFn = async () => {
    return 'Success!'
}

asyncFn()
.then(value => console.log(value))


const asyncFn1 = async () => {
    throw new Error('There was an error!')
}

asyncFn1()
.then(value => console.log(value))
.catch(error => console.log(error.message))

const timerPromise = () => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(), 2000))

const asyncFn2 = async () => {
    console.log('Timer start')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Time ended', endTime - startTime)
}

asyncFn2()

const getData1 = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'

try {
    const data = await getData1(url)
    console.log(data)
    } catch (error) {
    console.log(error.message)
}

