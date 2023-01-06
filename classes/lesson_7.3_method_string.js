////////////////////perevod numbers v string
/////////////// String(n)
//////////////n.toString()
///////////// `${n}`
let n = 15.25
console.log(String(n))
console.log(n.toString())
let s = `${n}`
console.log(s)
console.log(n.toFixed(2))
let arr = ['a', 'b', 'c']
console.log(arr.join(''))
/////////////////////////perevodim number v string
////////////////////vozvraschaet number iz stroki kotoraia nachinaetsia s chisla
console.log(parseInt(n)) 
console.log(typeof(1 * '15'))

///////////////////// .toUpperCase(), .toLowerCase()
console.log('hello world'.toUpperCase())
console.log('HELLO WORLD'.toLowerCase())

/////////////////////// method .concat
////////////////////// skladyvaet neskolko string v odin

let str = 'I';
let str1 = 'am';
let str2 = ' a student'
let result = str.concat(' ', str1, str2)
console.log(result)
let name1 = 'Nadia'
let hello = 'Hello'

hello.concat(`${name1}`, '. Have a nice day')

/////////////////////////////// padStart(1, 'string')
////////////pervaia cifra a dlinna novogo stringa

function res(str) {
    const a = str.padStart(9, 'wood');
    const b = str.padStart(13, 'wood');
    const c = str.padStart(8)
    const d = str.padStart(3, 'wood')
    const e = str.padStart(6, 'wood')
    return d
}
console.log(res('Table'))

///////////////////// padEnd(1, 'string')
////////////////// to ze samoe 

/////////////////////////method includes('my', 2) /////// mozno ukazat index s kotorogo nachinat poisk
//////////////////////// proveriaet sootvetstvuet li znachenie, chustvitelen k upercase
console.log('my'.includes('my'))

/////////////////////////method .indexOf()
/////////////////////////vozvraschaet index pervogo vhozdenia podstroki v stroke
////////////////////////vozvraschaet 1 esli znacjenie ne naideno
//str.indexOf(otherStr, [index])
let str3 = 'A turtle is on the beache'

console.log(str3.indexOf('turtle'))
console.log(str3.indexOf('turtle', 3))

let count = 0;
let position = str3.indexOf('e')
while (position != -1){
    count++
    position = str3.indexOf('e', position + 1)
}
console.log(count)
///////////////////////method .lastIndexOf()
/////////////////////////vozvraschaet index poslednego vhozdenia podstroki v stroke
console.log(str3.lastIndexOf('turtle'))

//////////////////////method .substring()
///////////////////////vyrezaet kusok string ot i do
console.log(str3.substring(1, 7))

//////////////////////////.slice()
//////////////////// vozvraschaet kusok posle index
console.log(str3.slice(1, -7))

/////////////////////////// .replace()
//////////////////////////vozvraschaet novuy stroku s izmeniennym elementom

console.log(str3.replace('turtle', 'dog'))
console.log(str3.replaceAll(/Turtle/gi, 'dog')) //gi delaet ne chuvstvitelnym k keis

/////////////////////// .split()
////////razbivaet object na array
console.log(str3.split(' '))

////////////////////////// .trim(), .trimEnd(), .trimStart()
/////////////////////////////obrezaet pustye stroki, probely
//////////////////// chartCodeAt()
///////////////////vozvraschaet unicod
console.log('Hello'.charCodeAt(4))

//////////////////////////// .endsWith(string)

////////proveriaet poslednii element massive ili string 

//////////////// x.replace(/ /g, '')  //////////// zamenili vse probely

/////////////// x.split(' ').join('') 1. pereveli stroku s probelami v massive, 2. obedenili elementy v sroku
