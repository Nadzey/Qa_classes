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