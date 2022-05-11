const fs = require('fs')

/*const addNote = (title,body)=>{
    const notes = loadNote()
    const duplicateTitles = notes.filter((note)=>{
        return note.title === title
    })
    console.log(duplicateTitles);
    if(duplicateTitles.length ===0){
        notes.push(
            {
                title,
                body:body
            })
            saveNotes(notes)
            console.log('Saved Successfully')
    }
    else{
        console.log('Error duplicate title')
    }

}*/

const addNote = (title,body)=>{
    const notes = loadNote()
    const duplicateTitles = notes.find((note)=>{
        return note.title === title
    })
    //console.log(duplicateTitles);
    if(!duplicateTitles){
        notes.push(
            {
                title,
                body:body
            })
            saveNotes(notes)
            console.log('Saved Successfully')
    }
    else{
        console.log('Error duplicate title')
    }

}
////////////////////////////////////////////////////////////////////////////////
// Delete
const removeNote = (title) =>{
    const notes = loadNote()
    const notesToKeep = notes.filter((obj)=>{
        return obj.title !== title
    })
    if (notes.length !== notesToKeep.length){
        console.log(notesToKeep)
        saveNotes(notesToKeep)
        console.log('Removed')
    }
    else {
        console.log('title not found to delete')
    }

}
///////////////////////////////////////////////////////////////////////////////
// read 

const readNotes = (title)=>{
const notes = loadNote();
const readno = notes.find((n)=>{
    return n.title == title
})
if(readno){
    console.log(readno)
    console.log(readno.title,readno.body)
}
else{
    console.log("Error")
}

}

///////////////////////////////////////////////////////////////////////////////

const listNotes = () =>{
    const notes = loadNote()
    notes.forEach((note) => {
        console.log("Title : " + note.title)
    });
}

/////////////////////////////////////////////////////////////////////////////////
const loadNote = ()=>{
    try{
        const data = fs.readFileSync('notes.json').toString()
        return JSON.parse(data)
    }
    catch(e){
        return[]
    }
}

const saveNotes = (notes) =>{
    const savedata = JSON.stringify(notes)
    fs.writeFileSync('notes.json',savedata)
}

module.exports = {
    addNote,
    removeNote,
    readNotes,
    listNotes
}