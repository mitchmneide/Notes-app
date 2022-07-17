const router = require('express').Router();
const { notes } = require('../data/db.json');

const { createNote , validateNote} = require('../lib/notes');

router.get('/notes', (req,res) => {
    res.json(notes);
});
router.post('/notes', (req,res) => {
    req.body.id = notes.length.toString();
    if(!validateNote(req.body)) {
        res.status(400).send('Your note is not properly formatted.');
    } else {
        const note = createNote(req.body, notes);
        res.json(note);
    }
});
module.exports = router;