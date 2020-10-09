const { addNotes } = require('../db/middleware');
const db = require('../db/middleware');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    var data = db.getNotes();
    res.json(data);
});

router.post('/notes', (req, res) => {
    console.log(req.body);
    db.addNotes(req.body);
    res.end();
});

module.exports = router;