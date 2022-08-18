const router = require('express').Router();

const { createNote } = require('../../lib/notes');
const db = require('../../db/db.json');

// add route
router.get('/notes', (req, res) => {
    console.log(db);
    res.json(db);
});

router.post('/notes', (req, res) => {
    let note = req.body;

    
})

module.exports = router;