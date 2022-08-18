const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const { createNote } = require('../../lib/notes');
const db = require('../../db/db.json');

// get notes
router.get('/notes', (req, res) => {
    // console.log(db);
    res.json(db);
});

// post notes
router.post('/notes', (req, res) => {
    let note = req.body;
    note.id = uuidv4();
    db.push(note);
    fs.writeFile('./db/db.json', JSON.stringify(db), function(err){
        if (err) throw err
        res.json(note);
    })
})

module.exports = router;