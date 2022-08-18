const fs = require('fs');
const path = require('path');

function getNotes() {
    
}

function createNote (body, notesArray) {
    const note = body;

    notesArray.push(note);
    
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    )
    // return finished code to post for response
    return note;
}

module.exports = { createNote };