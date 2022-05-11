// create object
const person= {
    name:"samaa",
    age: 22
}
//console.log(person)

// convert object to json
const personjson = JSON.stringify(person)
//console.log(personjson)

//writeFileSync
const fs = require('fs')
fs.writeFileSync('person.json',personjson);
console.log(fs.readFileSync('person.json').toString())

//json change object
let personobj = JSON.parse(personjson);

// edit object
personobj = {
    name: 'Aya',
    age: 18
}

//change object --> json
const personjson2 = JSON.stringify(personobj)
console.log(personjson2)

// write
fs.writeFileSync('person.json',personjson2);
console.log(fs.readFileSync('person.json').toString())
