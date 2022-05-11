/*const fs = require('fs')
fs.writeFileSync('notes.txt','Hello');

console.log(fs.readFileSync('notes.txt').toString())

fs.appendFileSync('notes.txt',' Samaa')

console.log(fs.readFileSync('notes.txt').toString())

const data =  require('./data')
console.log(data)
console.log(data.firstName)
console.log(data.lastName)
console.log(data.add(5,6))

var validator = require('validator');

console.log(validator.isEmail('foo@bar.com')); //=> true

*/


/*console.log(process.argv)

for (let i = 2 ; i<process.argv.length;i++){
    if(process.argv[i]==='add'){
        console.log ('Add Item')
    }
    else if(process.argv[i]==='remove')
        console.log('Delete Item')
    else{
        console.log('Error')
    }
}*/

const yargs = require('yargs')

const notes = require('./notes')
//Add
yargs.command(
    {
        command:'add',
        describe:'Add Notes',
        builder:{
            title:{
                describe: 'This is title Description in add comand',
                type: 'string',
                demandOption: true
            },
            body:{
                describe: 'This is body Description in add comand',
                type: 'string',
                demandOption: true
            },
        },
        handler:()=>{
            notes.addNote(yargs.argv.title,yargs.argv.body)
        }
    }
)

//Delete
yargs.command(
    {
        command:'delete',
        describe:'Delete Notes',
        builder:{
            title:{
                describe: 'This is title Description in delete comand',
                type: 'string',
                demandOption: true
            },
        },
        handler:()=>{
            notes.removeNote(yargs.argv.title)
        }
    }
)

//list
yargs.command(
    {
        command:'list',
        describe:'list Notes',
        handler:()=>{
            notes.listNotes(yargs.argv.title,yargs.argv.body)
        }
    }
)

//read
yargs.command(
    {
        command:'read',
        describe:'read Notes',
        builder:{
            title:{
                describe: 'This is title Description in read comand',
                type: 'string',
                demandOption: true
            },
        },
        
        handler:()=>{
            notes.readNotes(yargs.argv.title,yargs.argv.body)
        }
    }
)

console.log(yargs.argv)

