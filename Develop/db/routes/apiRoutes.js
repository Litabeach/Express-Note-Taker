const noteData = require("../db");
const fs = require("fs")
const path = require ("path")


module.exports = function (app) {
    //get /api/notes should read the db.json file and return all saved notes as JSON.
    app.get("/api/notes", function (req, res) {
        res.json(noteData)
    });

    //post 
    //POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
    app.post("/api/notes", function (req, res) {
        console.log(req.body)
        const newNote = req.body;
        noteData.push(newNote);
        // fs.writeFileSync(
        //     path.join(__dirname, 'db.json'),
        //     JSON.stringify(noteData, null, 2)
        //   );
        res.json(newNote);
    });

    //delete
    // DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
    app.delete('/api/notes/:id', (req, res) => {
        //remove the appropriate note
        const deleteNote = req.params.id;
        noteData.splice(deleteNote, 1);
      
        //reassign the noteids
        for(let i = 0; i < noteData.length; i++){
          console.log(noteData[i]);
          noteData[i].id = i;
          console.log(noteData[i]);
        }
      
        fs.writeFileSync(
          path.join(__dirname, 'db.json'), 
          JSON.stringify(noteData, null, 2)
        );
        //update the db.json file
        res.json(req.body);
      });

};