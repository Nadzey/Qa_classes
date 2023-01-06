//////////////////////objects

const obj = {appel: 10, peach: 20, plum: 30}
///////////let key in object
for(let key in obj) {
        if(key == "plum") {
console.log(`${key} - $${obj[key]}`)
        }
    }

 