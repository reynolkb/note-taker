const fs = require('fs');
const uniqid = require('uniqid');
let data = require('./db.json');

class DB {
    constructor(data) {
        this.data = data;
    }

    getNotes() {
        return this.data;
    }

    addNotes(note) {
        var updatedNote = { title: note.title, text: note.text, id: uniqid() };
        this.data.push(updatedNote);

        fs.writeFileSync('./db.json', JSON.stringify(data));
    }

    deleteNotes(id) {
        var allNotes = this.getNotes();

        var filteredNotes = allNotes.filter(note => {
            return note.id !== id;
        });

        this.data = filteredNotes;

        fs.writeFileSync('./db.json', JSON.stringify(data));
    }
}

module.exports = new DB(data);