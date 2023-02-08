// fetch('https://jsonplaceholder.typicode.com/todos/')
//       .then(response => response.json())
//       .then(json => console.log(json)) 
//       .catch(error => console.log(error.message))

const getData = (url) =>
new Promise((resolve, reject) =>
fetch(url)
.then(response => response.json())
.then(json => resolve(json))
.catch(error => reject(erre))
)
