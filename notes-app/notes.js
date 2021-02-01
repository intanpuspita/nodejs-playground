const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    console.log(chalk.bgGreen("Your notes..."))
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(chalk.blue(note.title))
    })
}

const getNote = (title) => {
    const notes = loadNotes()
    const selectedNote = notes.find((note) => {
        return note.title === title
    })

    // debug
    debugger

    if(!selectedNote) {
        console.log(chalk.bgRed('Note not found'))
    } else {
        console.log(chalk.bgGreen(selectedNote.title))
        console.log(selectedNote.body)
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateTitle = notes.filter((note) => note.title === title)
    const duplicateTitle = notes.find((note) => note.title === title)

    if(!duplicateTitle) {
        notes.push({
            title: title,
            body: body
        })
        saveNote(notes)
        console.log(chalk.bgGreen('Note added successfully!'))
    } else {
        console.log(chalk.bgRed('Duplicate note title'))
    }
}

const deleteNote = (title) => {
    const notes = loadNotes()
    const unmatchNotes = notes.filter((note) => note.title !== title)

    if(notes.length > unmatchNotes.length) {
        saveNote(unmatchNotes)
        console.log(chalk.bgGreen('Note removed'))
    } else {
        console.log(chalk.bgRed('No note found'))
    }
}

const loadNotes = () => {
    try {
        const buffer = fs.readFileSync('notes.json')
        const strBuffer = buffer.toString()
        return JSON.parse(strBuffer)
    } catch(e) {
        return []
    }
}

const saveNote = (notes) => {
    const content = JSON.stringify(notes)
    fs.writeFileSync('notes.json', content)
}

module.exports = {
    getNotes: getNotes,
    getNote: getNote,
    addNote: addNote,
    deleteNote: deleteNote
}