let arr = ['mama', 'c', [1, 2, null, 'c', true, undefined, 3, 'yrt'], 'hello world', 'abc']
for(let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
        if(arr[i][j] == 'c'){
            console.log(arr[i][j]) //////////vyvodim ves element massiva

        }
    }
}
console.log(arr[2][7][0])
//////////spred operator...
