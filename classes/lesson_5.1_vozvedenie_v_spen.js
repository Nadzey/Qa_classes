///////////////////////////opredelenie massive
//function code (arr){
//return arr ? arr.length : 'No array'
//1//return arr == null ? -1 : arr.length
     
//2//return !arr ? -1 : arr.length
    //________true__if___else false
//3//return Array.isArray(arr)
 //4// toze cherez if and else  

// if (arr == null){
//     return -1;
// }
// else {
//     return arr.length
// }
// }
// console.log(code([-1, 'y', null]))
//1. arr == null
//2. !arr
//3. Array.isArray(arr) /////boolevaia logic true or false

//////////////// type of preobrazovanij
// let str = '1'; 
// let num = 2;
// let bool = true; //// v math preobrazuetsia v 1
//console.log(num + bool) //2 + 1
//console.log(num + str) //21 

////////////////////////// vozvedenie v stepen
//2 ** 1/2 // prostoy
//Math.sqrt(2) ////////////// s pomoschiu method
////////////////////////////////////sorting masive ot minim
//let arr1 = [10, 2, 4, 67, 97, 139, 3, 90, -1, 2]
//           10, 2
//             2, 10
//              2, 4 ........
//           [2, 10, 4......]
//              10, 4
//               4, 10
//               [2, 4, 10........]
//// 2 is minimum sravnivaem vsie s 2 buble sorting
// for(let i = 0; i < arr1.length - 1; i++){     //////////////////
// for(let j = i + 1; j < arr1.length; j++){
//     if(arr1[i] > arr1[j]){  /////////esli hotim pomeniat ot menshego k bolshemu pomeniaj na <
//         let temp = arr1[i];
//         arr1[i] = arr1[j];
//         arr1[j] = temp;
//     }
// }
// }
// console.log(arr1)

// ////////////////////////////////////////////////nahodim 2 max znachenia
// console.log(arr1.length)
// console.log(arr1[arr1.length - 1]) /////////// vyvodim posledniu 
// console.log(arr1[arr1.length - 2]) /////////// vyvodim pred poslednuu 
// console.log(arr1[0])////////////////////////// vyvodim 1 chislo
/////////////////////// piramida
//1
//12
//123
// let n = 5;
// let str = '';
// for (let i = 1; i <= n; i++){ ////////// otvechaet za colichestvo strok
// for (let j = 1; j <= i; j++) {
// str = str + j ///////////////////////////////////napolnenie cikla, mozno vyvesti "1", '*', zameni j
// }
// str = str + `\n`
//}
//console.log(str)
//54321
//4321
//321
//21
//1
// for (let i = 1; i <= n; i++){ ////////// otvechaet za colichestvo strok
//     for (let j = n + 1 - i; j >= 1; j--) {
//     str = str + j ///////////////////////////////////napolnenie cikla, mozno vyvesti "1", '*', zameni j
//     }
//     str = str + `\n`
//     }
    //console.log(str)

    //     1
    //    12
    //   123
    //  1234
    // 12345
    // for (let i = 1; i <= n; i++){ ////////// otvechaet za colichestvo strok
    //     str = str + ' '.repeat(n - i)
    //     for (let j = 1; j <= i; j++) {
    //     str = str + j ///////////////////////////////////napolnenie cikla, mozno vyvesti "1", '*', zameni j
    //     }
    //     str = str + `\n`
    //     }
       // console.log(str)

//         11
//        1221
//       123321
//      12344321
//     1234554321
// for (let i = 1; i <= n; i++){ ////////// otvechaet za colichestvo strok
//     str = str + ' '.repeat(n - i)
//     for (let j = 1; j <= i; j++) {
//     str = str + j ///////////////////////////////////napolnenie cikla, mozno vyvesti "1", '*', zameni j
//     }
//     for(let j = i; j >= 1; j--){
//         str +=j
//     }
//     str = str + `\n`
//     }
//     console.log(str)

    //         1
    //        121
    //       12321
    //      1234321
    //     123454321

    // for (let i = 1; i <= n; i++){ ////////// otvechaet za colichestvo strok
    // str = str + ' '.repeat(n - i)
    // for (let j = 1; j <= i; j++) {
    // str = str + j ///////////////////////////////////napolnenie cikla, mozno vyvesti "1", '*', zameni j
    // }
    // for(let j = i - 1; j >= 1; j--){
    //     str +=j
    // }
    // str = str + `\n`
    // }
    // console.log(str)
    //////////////////////////////////////////////piramida
    let he = 5;
    for(let i = 0; i <= he; i++){
        let str = '';
        for (let j = 0; j < he - i; j++){
            str = str + ' ';
        }
        for(let star = 0; star < i; star++){
                str += '*'
             }
             str = str + '*'
             for(let rStar = 0; rStar < i; rStar++){
                
                str += '*'
             }
             console.log(str) 
             }
       
    
    