const router = require('express').Router();
const {notes} = require('../../Develop/db/db.json');
const { createNote , validateNote} = require('../../lib/notes');

router.get('/notes', (req,res) => {
    let results = notes;
    res.json(results);
});
router.post ('/notes', (req,res) => {
    req.body.id = notes.length.toString();
    if(!validateNote(req.body)) {
        res.status(400).send('Your note is not properly formatted.');
    } else {
        const note = createNote(req.body, notes);
        res.json(note);
    }
})
module.exports = router;