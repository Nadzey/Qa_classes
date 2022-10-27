////////////////////////////////////////// while loop
// let i = 7;
// while(i != 0){
//     console.log(i)
//     i--
// }
//console.log(i)

//////////////////////////////////////////// massive
// const fruits = ['apple', 'pears', 'plums', 'grape']
// let index = 0;
// while (index < fruits.length){
//     console.log(fruits[index])
//     index++
// }
/////////////////////////////////////////////// do while
let sum = 0;
let number = 0;

do {
    sum += number;
    number = parseInt(prompt('Enter a number: '))
} while (number >= 0)

document.write(`The sum is ${sum}. `)
/////////////////////////////////////////////////////////////
// let k = 0;
// do {
//     console.log(k);
//     k++
// } while (k < 3)
/////////////////////////// for + break

// for (let i =0; i <= 10; i++){
    
//     if (i == 7) break;
//     console.log(i)
// }
//////////////////////////////// for + continue /// propuscaet to za chem stoit
// for (let i =0; i <= 10; i++){
    
//         if (i % 2 == 0) continue;  //////////// 2 / 2 = 0; 4/2 = 2; proverca na celoe chislo (0 posle zapiatoj) 5/2 = 2.5  % = 0.5 ne ravno 0 ne chetnoe
//         console.log(i)
// }

//////////////////////////////////////////ternary operator: ? esli verno sdelai, : esli ne verno (if else socratili)
// let a = 7;
// (a > 5) ? console.log(a) : console.log('Hi')

/////////////////////////////////////////////////vlozenie cicle

// let str = '';
// for (let line = 1; line <= 5; line++){
   
//     str = str + line;
//     console.log(str)
// }
 ///////////////////////////////////////////// 2 variant vlozennij
//  for (let line = 1; line <= 5; line++){ /// otvechaet scolko strok budet
//     let str = '';
//     for (let numInLine = 1; numInLine <= line; numInLine++) { /// chto budet
//     str += numInLine; 
// }
//     console.log(str)
// }

///////////////////////////////////////////////////umenshenie v obratnom napravlenii
// for (let line = 5; line >= 1; line--){ /// otvechaet scolko strok budet
//     let str = '';
//     for (let numInLine = 1; numInLine <= line; numInLine++) { /// chto budet v stroke
//     str += numInLine; 
// }
//     console.log(str)
// }

// for (let i = 1; i <=10; i++){
//     let str = '';
//     for (let j = 1; j <= i; j++){
//         str = str + j;
//         if (i == 10) break;
//     }
     
//     console.log(str)
// }
////////////////////////////////////////kak dostat element iz vlozennogo massive
// let arr = [1, ['a', 'b', [5, 7]], 3, 'Hello_world']
// ////////// 0  _____1____________   2    3
// //////////       0    1  ___2___       01234 
// //////////                0   1 
// console.log(arr[3][5]) ////// dobiraemsia do nuznogo element
// console.log(typeof arr[3])
// ////////////////////////////////proverka na pustoi massive
// let arr2 = [];
// if (arr2.length == 0){
//     console.log("it's empty")
// }

////////////////////////////proverka chto massive est
