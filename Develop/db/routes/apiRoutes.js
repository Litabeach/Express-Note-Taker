const noteData = require("../db");

module.exports = function (app) {
    //GET /api/notes should read the db.json file and return all saved notes as JSON.
    app.get("/api/notes", function (req, res) {
        res.json(noteData)
    });

    //POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
    app.post("/api/notes", function (req, res) {
        // console.log(req.body)
        const newNote = req.body;
        //push the new note to array of notes
        noteData.push(newNote);
        res.json(newNote);
    });

    // DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
    app.delete('/api/notes/:id', (req, res) => {
        //remove the appropriate note by splicing the array
        const deleteNote = req.params.id;
        noteData.splice(deleteNote, 1);
      
        //assign the noteData ids
        for(let i = 0; i < noteData.length; i++){
          console.log(noteData[i]);
          noteData[i].id = i;
          console.log(noteData[i]);
        }
        
        //update the db.json file
        res.json(req.body);
      });

};