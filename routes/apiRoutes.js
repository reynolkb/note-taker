const db = require('../db/middleware');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    var data = db.getNotes();
    res.json(data);
});

router.post('/notes', (req, res) => {
    db.addNotes(req.body);
    res.end();
});

router.delete('/notes/:id', (req, res) => {
    db.deleteNotes(req.params.id);
    res.end();
});

module.exports = router;