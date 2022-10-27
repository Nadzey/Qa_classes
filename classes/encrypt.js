///////////////////////// zashifrovivaem s pomoschiu metoda bukvi v 
let str = 'Hellow world!';
let encrypted = [];
let transcripted = '';
for (let i = 0; i < str.length; i++){
    encrypted[i] = str[i].charCodeAt();
}
console.log(encrypted);

for (let j = 0; j < encrypted.length; j++){
    transcripted += String.fromCharCode(encrypted[j]);
    
}
console.log(transcripted) 


