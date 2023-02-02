//let test = [28, 16, 37, 21, 17, 27]

// ///////////////eto ne rabochaia funkciia
// let arr = test.map(el => test.splice(0, 3))    ///////////////method map povtoriaet iteraciu stolko raz scolko element v masive
// console.log(arr)          ////////////////splice(ot kakogo element do kakogo otrezaem)
// console.log(test)

// let test1 = [28, 16, 37, 21, 17, 27, 3, 13, 0, 19, 24, 3]
// let arr1 = test1.map(el => test.splice(0, 3))
// console.log(arr1)
// console.log(test1)


// ///////////////////////////array

// const arr3 = [1, 2, 3,] ///dop zapiataia pomogaet rashiriat massive
// /////////////////obiavlenie array cherez konstruktor, zarezervirovannoe slovo
//let arr2 = new Array(10, 3, 5, 67, 'str', null, false);
// //arr2.length = 0;   ///////////////////////mozno obnulit massive

// console.log(arr2.length)

// console.log(arr2[arr2.length - 1])  //////////////obrachenie k poslednemu elementu massive
// console.log(arr2.at(- 1))           //////////toze samoe

// ////////////////////////////////method dlia array======== pop(), push() ======== rabotaut s konca massiva
// arr2.push('strrrr', 1, null, [1, 'str', 2,'got']) /////// push dobavliaet elementy v massive
// console.log(arr2)
// console.log(arr2.push(100)) ////////////////////vyvodit kolichestvo elementov v massive

// //arr2.pop()  ////////////////////////pop udaliaet poslednii element
// console.log(arr2[10].pop()) ///////////////udaliaem poslednii element vo vlozennom massive
// console.log(arr2)

// ////////////////////////=============shift(), unshift()============= rabotaut s nachalom massiva

// arr2.unshift(1)
// console.log(arr2)
// arr2.shift()
// console.log(arr2)

// ///////////////////////////////method ============concad ===========slianie massivov

// let arr5 = ['*', '***']

// let newArr = arr5.concat(arr2, arr3)   ///////////////obiadenili 3 array
// console.log(newArr)

// //////////////////////////=========reverse ========perevarachivaem massive

// arr5.reverse()
// console.log(arr5)

// ////////////====================rabota so strocami (string)

// //////////////////////==================split ======== perevod stroki v massive s razbivkoi

// let str = "Hello world!"

// let arr4 = str.split('l') // udaliaet i razbivaet po bukve 'l'
// console.log(arr4)
//   /////////////////====================join=========== perevodim obratno v stroku

// let newArr1 = arr4.join('l') //v probel dobavliaet to chto dobavili
// console.log(newArr1)


////////////////=================slice(0, 1) ======== vozvrashaet novyi massiv, kopiruet iz ishodnogo

// let newArr2 = arr2.slice(3, 4) ////// esli ostavit tolko odin argument (1), otrezet ot nego i do konca, mozno otrezat s konca, primenit -

// console.log(newArr2)

// ///////////=========splice(index, deletCount, el1. el2, ........ elN) udaliaet ukazannye elements i na ih mesto vstavliaet
// console.log(arr4)
// arr4.splice(4, 1, 'e', 'l', 'l') //// 1 cifra ot kuda nachinat, 2 cifra skolko elementov udalit, ostalnoe eto to chto dobavliaem
// console.log(arr4)

// ///////////////////////========method .indexOf() === ischet index vhozdenia elementa
// /////// .indexOf(item, fromIndex)

// const arr6 = 'Hello World'.split('')
// console.log(arr6)


// let index = arr6.indexOf('l')
// while (index != -1) {
//   console.log(index)
//   index = arr6.indexOf('l', index + 1) ///////////// vyveli vse index elements 'l'
// }


// ////////////////////////====.lastIndexOf  toze chto i indexOf tolko s konca

// let index1 = arr6.lastIndexOf('l')
// console.log(index1)

// ///////////////////=========== .includes() proveriaet vhodit li element v nmassive, false ili trye

// console.log(arr6.includes('L'))

// ////////////////////============== .find(function(element, index, array){...})); nahodit element sootvetstvuuschii usloviam

// const arr7 = [2, 4, 6, 8, 10, 11,]
// // nechetnoe chislo num % 2 != 0

// console.log(arr7.find(el => el % 2 != 0))

// ////////////////================ .findIndex vozvraschaet pervyi naidennyi index kotoryi udovletvoriaet usloviu
// console.log(arr7.findIndex(el => el % 2 != 0))
// console.log(arr7.find((i, el) => i % 2 == 0 && el % 2 != 0))

// ////////////////================= .filter(function(el, ind, array) => {...})) ===vozvraschaet novyi massive
// const arr8 = [-1, 2, 3, 4, 5, 6, 7, 8, 9, 's']
// /////////////vozvraschaem nechetnye (odd)
// const arrOdd = arr8.filter(el => el % 2 !=0)
// const arrStr2 = arr8.filter(el => typeof el == 'string') //// sobrali vse elementy s tipom stroka
// console.log(arrOdd)
// console.log(arrStr2)

// //////////////=============== .every() == proveriaet chto vse elementy sootvetstvuut usloviu

// console.log(arr8.every(el => el > 0))

// /////////////=============== .some() ===== toze chto i .every no tolko hotia by ODIN element dolzen sootvetstvovat
// console.log(arr8.some(el => el > 0))

// /////////////////////////// .forEach()
//const arr0 = [-1, -8, -9, -2, 0, -5]

// const changeSingn = function (el) {
//   console.log(-el)
// }
// //////////////to ze samoe
// const changeSing = el => console.log(-el)


// //changeSingn(arr0[4])
// arr0.forEach((el, i) => i % 2 == 0 ? console.log(-el) : console.log('-'))

// arr0.forEach(el => console.log(el **3))

//arr0.forEach((el, i, arr) => i % 2 != 0 ? console.log((el ** 2) + arr.length) : console.log('-'))

// arr0.forEach(el => el % 2 != 0 ? console.log('Odd') : console.log('Even'))

// ////////////////////////===== .sort()
// // method vozvraschaet massive v alfavitom poriadke

// const arr9 = ['Anna', 'Steve', 'Jane', 'Serg']
// console.log(arr9.sort())

// // sortiruet v obratnom poriadke (.revers())
// console.log(arr9.sort().reverse())

// const arr10 = [21, 32, 90, 2, 19, 10]
// console.log(arr10.sort())

// //////// sortirovka chisel method .sort(a, b => a - b)
// console.log(arr10.sort((a, b) => a - b))

// ///////// sortirovka po ubyvaniu
// console.log(arr10.sort((a, b) => b - a))

// ////poluchit naimenshij element massiva
// console.log(arr10.sort((a, b) => a - b)[0])

// ///poluchit naibolshuu element massiva
// console.log(arr10.sort((a, b) => b - a)[0])

// //////////////////////method .map()
// ////vozvraschaet Massive rezultat vypolnenia colback function
const arr11 = ['JavaScript', 'Java', 'Pyton', 'English', 'Sql']

// console.log(arr11.map(el => el.length))
 console.log(arr11.map((el, i, arr) => i ==0 || i == (arr.length - 1) ? `**${el}**` : el))

// const newArr0 = arr10.map(item => item ** 2)

// console.log(newArr0)

// ////////////////////========= +el ili (Number) perevodim stroku v chislo
// const strArr = ['1', '2', '3', '9']

// const NewStrArr = strArr.map(el => +el)

// console.log(NewStrArr)

// /////////////////toze samoe
// console.log(strArr.map(Number))

// ///////////////////========= .reduce() .reduceRight()
// //////////////// v etom method 4 parametrs
// /////////////// ispolzuut dlia vycheslenia odnogo znachenia na osnovanii massive
// // .reduce((accumulator, el, index, array) => {.....})

// const result = arr10.reduce((sum, el) => sum + el)
// console.log(result)
// let sum = 0;
// for(let i = 0; i <arr10.length; i++) {
//   sum += arr10[i]
// }
// console.log(sum / arr10.length)

// ///////////.reduceRight() to ze tolko obrabotka s obratnoy storony

// console.log(arr10.reduce((sum, el, i, arr) => (i === arr.length -1) ? (sum + el) / arr.length :sum + el, 0))
// /////////// toze samoe
// console.log(arr10.reduce((sum, el, i, arr) => sum + el / arr.length, 0))
// /////////// toze samoe
// console.log(arr10.reduce((sum, el) => sum + el, 0)/ arr10.length)
// ///////////toze delaem s pomoschiu .reduce()

// //==//==//==//==//=== static method Array.from()

// const arr12 = Array.from(Array(12).fill(0));
// /////// .fill(0) zapolniaet massive odinakovymi znacheniami

// let n = 10
// let start = 10
// let finish = 25

// // /////////////// .keys() zapolniaet massive chislami ot 0 do nuznogo
// // const arr13 = Array.from(Array(n + 1).keys());
// // console.log(arr13)

//  const arr14 = Array.from(Array(finish - start +1).fill(start), (el, i) => el + i);
//  console.log(arr14)

// console.log([...Array(11).keys()])

// ////////////////  .Array.of()
// const arr16 = Array.of('Anna', 'Seva', null, NaN, 1, 0, -1)
// console.log(arr16)

// /////////////// Array.isArray() vozvraschaet true ili false
// console.log(Array.isArray(arr16))

// let numbers = [9, 7, 5, 3, 1]
// let min = Math.min.apply(this, numbers) ////iz array vybiraet naimenshee znachenie
// let max = Math.max.apply(this, numbers) // iz array vybiraet i prisvaevaet naibolshee znachenie
// let newArr15 = []

// for (var i = min; i <= max; i++) {
//     newArr15.push(i)
//   }
//   console.log(newArr15)

// ///////////////////////////////skladyvaem vse polozitelnye elementy v massive
// let arr17 = [-1, 2, -3, 4]
// console.log(arr17.reduce((x, y) => x + (y > 0 ? y : 0), 0)) /// y : 0 otvechaet za pustoi massive

// let input = [1, 3, 5, 7, 6] 

// console.log(input.filter(el => el % 2 == 0) /////////// vybrali v novyi array chitnye (.filter)
//               .reduce((sum, el) => sum + el)) /////////slozili vse vybrannye znachenia
   

  
//  /////////////////////skladyvaem vse elementy massive
//     let sum = 0;
//       input.forEach(el => sum += el)
//          console.log(sum)

// ////////////////////skladyvaem cherez .reduce
// console.log(input.reduce((a, b) => a + b, 0))

// ///////////////sozdaem novyi massive iz suschestvuuschego
// const arr = N => Array.from({length : N}, (el, i) => el = i)

// console.log(arr)