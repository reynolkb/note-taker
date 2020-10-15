const fs = require('fs');
const uniqid = require('uniqid');
let data = require('./db.json');

class DB {
    constructor(data) {
        this.data = data;
    }

    // returns the current notes
    getNotes() {
        return this.data;
    }

    // adds a note with a new unique id
    addNotes(note) {
        var updatedNote = { title: note.title, text: note.text, id: uniqid() };
        this.data.push(updatedNote);

        // creates a file with the data
        fs.writeFileSync('./db/db.json', JSON.stringify(data));
    }

    // deletes a note
    deleteNotes(id) {
        var allNotes = this.getNotes();

        // if the id does not equal the note id then return it
        var filteredNotes = allNotes.filter(note => {
            return note.id !== id;
        });

        this.data = filteredNotes;

        // rewrites the file back with the updated notes
        fs.writeFileSync('./db/db.json', JSON.stringify(data));
    }
}

module.exports = new DB(data);