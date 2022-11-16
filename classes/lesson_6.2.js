// ////////////////////zdanie s raznoj vysotoy
// //input: heights = [4, 2, 3, 1]
// //output: [0, 2, 3]


// ////////4 sposoba sozdania function
// function Add(num1, num2){
//     let sum = num1 + num2;
//     return sum;
// }
// let res = Add(7, 8)
// console.log(res)

// ////////////////////function expression

// let add = function a (num1, num2) {
//     let sum = num1 - num2;
//     return sum;
// }
// let res1 = add(9, 8)
// console.log(res1)

// /////////////////////function as an arrow function*/
// var add1 = (num1, num2) => num1 * num2;
// let res2 = add1 (4, 3)
// console.log(res2)

// //////////////////////function created using the function construction*/
// // var add2 = Function('num1', 'num2', 'return num1 / num2');
// // let res3 = add2 (10, 2);
// // console.log(res3)

// ////////////////obiavlenie function in function
// function showMessage () {
//     console.log('Hello')
// }
// function sum4() {
//     const a = 3; 
//     const b = 4;
//     console.log(a + b)
//     showMessage();
// }
// sum4()

// ///////////////////////obiavliaem function in function

// function sum3 () {
//     const a = 2; 
//     const b = 9;
//     console.log(a + b)

//     function showMessage() {
//         console.log('Hello')
//     }
//     showMessage();
// }
// sum3()

// //////////////////////////obiavlenie peremennyh
// let name = 'Sergio';
// function showMessage () {
//     let name = 'Anna';
//     return name;
// }
// console.log(showMessage())
// //console.log(name)

// /////////////////////function with argument
// function sum5(x, y) {
//     console.log(x + y)
// }
// sum5(2, 5)

// /////////////////////////////function argument by default

// function sum6(x = 0, y = 3) {
//     console.log(x + y)
// }
// sum6(2)

/////////////////////////////vlozenye cycly

let arr = [1, 'mamama', 'my', [1,2, 'abcc', 5, -20,5, 'b', 'c'], 10, 'papac', 'abc'];

const words = ['spray', 'limit', 'elite', 'exuberrant', 'destruction', 'present']
//console.log(arr)
// function search (arr){
// for(let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] == 'c'){
//             console.log(arr[i])
//         }
//     }
// }
// }
// search(words)

///////////////////////////////////////rabotaem s elementami massive
////////////////////////////////vlozennyie for y
//////////////////////////////naiti samyj dlinnyj element massive
// function ellementLongest(arr){
//     let longest = arr[0].length;
//     let num = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (longest < arr[i].length) {
//             longest = arr[i].length
//             num = i
//         }
//     }
//     return longest;
//     //return num;
// }
//console.log(ellementLongest(words));

////////////////////////////////////verniem element cotoryj iavliaetsia chislom

function findNumber (arg) {  /////////////////////argument luboe nazvanie, 
    for (let i = 0; i < arg.length; i++){
        if(typeof(arg[i]) == 'number') ///////////////////////////vybiraem chisla osnovnye
        console.log(arg[i])
        for(let j = 0; j < arg[i].length; j++){  ////////////////////vhodim v nutr massiva vlozennogo
            if(typeof(arg[i][j]) == 'number')

            console.log(arg[i][j])
        }
        }
    }
findNumber(arr)
