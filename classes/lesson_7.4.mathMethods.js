let arr = [28, 16, 37, 21, 17, 27]

//////////////Math.min(...arr)==== rabotaet tolko so spred operatorom

let min = Math.min(...arr)
let max = Math.max(...arr)
let newMin = Math.min(28, 16, 37, 21, 17, 27)
console.log(max, min, newMin)

//////////////////////Math.pow(num, power) /////stepen
console.log(Math.pow(2, 4))
//toze samoe
console.log(2 ** 4)

///////////////////Math.sqrt(num)== kvadratnyi koren
console.log(Math.sqrt(25));

//toze SVGAnimateMotionElement
console.log(25 ** (1/2))

/////////////////////okruglenie Math.round(), Math.floor(), Math.ceil(), Math.trunc()

let num = -5.566
console.log(Math.floor(num)) ///// okrugliaet v menshuu storonu
console.log(Math.ceil(num)) /// okrugliaetsia v bolshuu storonu
console.log(Math.round(num)) // rabotaet v sootvetstvii s math pravilami
console.log(Math.trunc(num)) // otbrasyvaet drobnuu cjast

///////////////////// method .toFix(NUM znaks)
// obrezaet do zadannogo kolichestva edinichnyh chisel

console.log(num.toFixed(2)) //-5.56

///////////////rezultat okruglenia = 'string'
// chtoby perevesti v number ispolzui =Number=
console.log(Number(num.toFixed(2)))

//////////////////method Math.sign(num
// vozvraschaet znak chisla esli -4 vernet -1, esli 0 vernet o, esli 6 vernet 1

console.log(Math.sign(num))

console.log(-545/0) // infinity mozet byt polozitelnym i otricatelnym

////////////////////// isFinite vozvraschaet false, true
//false esli NaN, infinity, string, true esli chislo
console.log(isFinite(-545 / '5'))

console.log(Number.isFinite(-545/ '5')) // proveriaet prishlo li chislo

/////////////////// parseInt
///// vytaskivaet chislo is stroki, esli est . obrezet do ., esli nachinaetsia s bukvy ne srabotaet
str = '1000.5.9px'
console.log(parseInt(str)) 
//parseInt takze perevodit dvoichnoe chislo v desiaticnoe
let str1 = '4A';
console.log(parseInt(str1, 16))

///////////////// parseFloat(), rabotaet s drobnymi

console.log(parseFloat(str)) // 1000.5 vidit tolko pervuu tochku


