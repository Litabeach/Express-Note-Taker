const noteData = require("../db");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");


module.exports = function (app) {
  //GET /api/notes should read the db.json file and return all saved notes as JSON.
  app.get("/api/notes", function (req, res) {
    res.json(noteData)
  });

  //POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
  app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    //set unique IDs using the UUID module
    newNote.id = uuid.v4();
    noteData.push(newNote);
    fs.writeFileSync(
      path.join(__dirname, '../db.json'),
      JSON.stringify(noteData)
    );
    res.json(newNote);
  });


  // DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
  app.delete("/api/notes/:id", function(req, res) {
    const deleteNote = req.params.id;
    for (let i = 0; i < noteData.length; i++) {
        if (noteData[i].id === deleteNote) {
            noteData.splice(i, 1);
        }
    }
    //update the db.json file
    res.json(req.body);
  });

};