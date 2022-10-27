////////////////////////////////////////// while loop
// let i = 7;
// while(i != 0){
//     console.log(i)
//     i--
// }
//console.log(i)



///////////////////////////////////////////while
let i = 1000;
while (i > 1) {
    console.log(i)
    i /= 2;
}
/////////////////////////////////////do while
// do {
// console.log('Hello world!');
// i++
// }
// while (i < 25) {
    
// }
////////////////////////////////////////// while loop
// let i = 7;
// while(i != 0){
//     console.log(i)
//     i--
// }
//console.log(i)

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