////////////////////При помощи цикла for выведите чётные числа от 2 до 10

// for (let i = 2; i <= 10; i++){
//     if(i % 2 == 0){
// console.log(i)
//     }
// }
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его 
// делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.

let n = 10;
for (let i = 2; i <= n; i++){
let flag = true;
for (let k = 2; k < i; k++){
    if (i % k == 0){
        flag = false;
    }
}
if (flag == true){
console.log(i)
}
}

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