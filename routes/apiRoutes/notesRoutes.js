const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const db = require('../../db/db.json');

// GET notes from db.json
router.get('/notes', (req, res) => {
    // console.log(db);
    res.json(db);
});

// POST request to add a note to array
router.post('/notes', (req, res) => {
    let note = req.body;
    
    // set unique id to each note
    note.id = uuidv4();
    db.push(note);

    // re-write db.json with new note
    fs.writeFile('./db/db.json', JSON.stringify(db, null, 2), function(err) {
        if (err) throw err;
        res.json(note);
        console.log('SUCCESS: Note has been saved!');
    })
});

// DELETE note by ID
router.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    let notesIndex = db.findIndex(note => note.id == id);

    db.splice(notesIndex, 1);

    // re-write db.json to reflect changes
    fs.writeFile('./db/db.json', JSON.stringify(db, null, 2), function(err) {
        if (err) throw err;
        res.json(db);
        console.log('Note has been deleted!');
    })
});

module.exports = router;