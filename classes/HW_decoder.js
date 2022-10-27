// Задача на смекалку
// Имеется зашифрованное предложение 
// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
// мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор.
////////////////////// 1 variant
let str = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr';
let newStr = ' ';

for(let i = 0; i < str.length; i++){
    if (str[i] != 'b' || str[i + 1] != 'r'){
        newStr = newStr + str[i];
    }
else {
    i++
}
}
console.log(newStr)
//////////////////////////////// 2 variant
///////////////// metod replace
console.log(str.replace(/br/g, ''));

/////////////////////////////// 3 variant metod split
console.log(str.split('br').join(''));