const db = require('../db/middleware');
const router = require('express').Router();

// gets current notes from server
router.get('/notes', (req, res) => {
    var data = db.getNotes();
    res.json(data);
});

// saves notes to server
router.post('/notes', (req, res) => {
    db.addNotes(req.body);
    res.end();
});

// deletes notes from server
router.delete('/notes/:id', (req, res) => {
    db.deleteNotes(req.params.id);
    res.end();
});

module.exports = router;