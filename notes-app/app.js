const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

// Create new command
yargs.command({
    command: 'create',
    describe: 'Create new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //mandatory
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true, //mandatory
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'delete',
    describe: 'Delete new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.deleteNote(argv.title)
    }
})

yargs.command({
    command: 'detail',
    describe: 'Detail of a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.getNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List of notes',
    handler() {
        notes.getNotes()
    }
})

yargs.argv