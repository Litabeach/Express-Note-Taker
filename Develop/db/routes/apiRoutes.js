const noteData = require("../db");
const fs = require("fs")


module.exports = function (app) {
    //get 
    app.get("/api/notes", function (req, res) {
        res.json(noteData)
    });

    //post 
    app.post("/api/notes", function (req, res) {
        noteData.push(req.body);
        res.json(true);

    });

     //delete 
     app.delete("/api/notes", function (req, res) {
        noteData.empty(req.body)
        // res.json(true);

    });

};