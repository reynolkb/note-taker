const db = require('../db/middleware');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    db.read()
        .then(data => {
            return res.json(data);
        });
});

router.post('/notes', (req, res) => {
    db.write()
        .then(data => {
            return res.json(data);
        });
});

module.exports = router;