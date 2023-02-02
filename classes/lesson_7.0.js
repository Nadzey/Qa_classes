////////////////////////work with strings
let string = 'abcdef';
console.log(string[1])

/////////mozno vyvesti po indeksu no nelzia izmenit

const array = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(array[1])
array[2] = 'M'
console.log(array)

///////////////////////////metod convertatii string in array ili array in string

///////////////method split()

///////////////split delit stoku po ukazannomu razdelitelu
let string1 = 'Hello world'
console.log(string1)
console.log(string1.split(" ")) //////console ne meniaet prosto vyvodit

////////////////////////////nuzno perenaznachit
let newString = string1.split(' ') /////////////esli ne postavit probel razbivaet kazduu bukvu kak otdelnyi element

console.log(newString)


////////////////////////////join
/////////////scleivaet massive v string, nuzno pereprisvaivat
let newArray = array.join(' ') ///////////////mozno postavit luboi simvol mezdu elementami
console.log(newArray)


//////////////////////////////metod pop/push
///////////////////////////// push vsegda priletaet v conec massiva
newString.push('d', 'u', 'm')           //////////////////////////method push izmeniaet array, ne nuzno pereprisvaivat
console.log(newString)

let c = newString.push(0)
console.log(c)                  ////////push schitaet colichestvo elementov massiva, nuzno polozit v novuu peremennuu

//newString.pop()              //////////////pop udaliaet poslednii element
console.log(newString)

let a = newString.pop()
console.log(a)                 ////////////////v novoi peremennoi vyvodit udalionnyi element

///////////////////////////unshift and shift dobavliaet i udaliaet elementy iz nachala massive

newString.unshift('H', 'L')
console.log(newString)

newString.shift()
console.log(newString)

let b = newString.unshift()
console.log(b)

let d = newString.shift()
console.log(d)

/////////////////////////////obiadenenie 2 massive
let tArray = [1, 2, 3, 's']
console.log(String(tArray[1]))  ///////////////////method String perevod v stroku mozno otdelnogo element

// newString.push(tArray)    //////////////////pushit massive v massive kak odin element
// console.log(newString)

///////////////// ... spred operator razvorachivaet massive
// newString.push(...tArray)    //////////////////pushit massive v massive kak otdelnye element
// console.log(newString)


///////////////////////mozno perepisat dva massiva v tretij massive

const array3 = [...newString, ...tArray]
console.log(array3)

///////////////////////primenenie sped operatora ...
console.log(...array3)

//////////////////class Math, metod max and min
 let array4 = [1, 22, 33, 44, 56, 89, 9]
 console.log(Math.max(...array4)) /////////nuzno primeniat spred operator
 console.log(Math.min(...array4))

 /////////////////////////////////////sravnivaem arrays!!!!!!!!!

 let a1 = [1, 2, 3]
 let b1 = [1, 2, 3]
 console.log(JSON.stringify(a1) === JSON.stringify(b1)) /////springify method JSON, perevodit v string i sravnivaet elementy massive


 console.log(String(a1), String(b1))
 console.log(Number(a1), Number(b1))
 console.log(Boolean(a1), Boolean(b1))

 /////////////////////////////////perezapisat element mozno
 b1[0] = 'G'
 console.log(b1)

 ////////////////////////uznat dlinnu string
 /////////////////////method .length
 let length = b1.length
 console.log(length)
/////////////////////////////////vyrezaet elementy string
 /////////////////////////////////metod .slice
 let part = string.slice(0, 7)
 console.log(part)
/////////////////////////////////zamena element v string
 ////////////////////////////////.replace

 let message = 'Please visit Microsoft'
 let newText = message.replace('Microsoft', 'W3Shool')
 console.log(newText)

 /////////////////////////////////zamena vseh odinakovyh element v string (ili f2)
 let message1 = 'Please visit Microsoft Microsoft'
 let newText1 = message1.replaceAll('Microsoft', 'W3Shool')
 console.log(newText1)

//////////////////////////////poisk elementa v string
 ////////////////////////////method .charAt()
 let letter = message.charAt(0)  ///////to ze chto i console.log(message[0]) = vyvod po index
 console.log(letter)

 ///////////////////////////// .reapeat()
 let j = 'Hi!'
 console.log(j.repeat(4)) //////// v skobkah skolko raz povtorit

 /////////////////////////////////method . trim() udaliaet spaces
 let text = '                 Hello world!             '
 console.log(text)
 let newText2 = text.trim()
 console.log(newText2)
 console.log(newText2.toLowerCase()) ////////////////////////perevod v strochnye
 console.log(newText2.toUpperCase()) ///////////////////////perevod v zaglawnye
