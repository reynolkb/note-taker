const fs = require('fs');
const uniqid = require('uniqid');

class DB {
    read() {
        return fs.readFile('./db.json', 'utf8');
    }
    getNotes() {
        return this.read()
            .then(notes => {
                return [].concat(JSON.parse(notes));
            });
    }

    write(title, text, id) {
        return fs.writeFile('./db.json', JSON.stringify({ title: title, text: text, id: uniqid() }));
    }
    addNotes() {
        return this.write()
            .then(note => {
                return [].concat(JSON.parse(note));
            });
    }
}

module.exports = new DB();