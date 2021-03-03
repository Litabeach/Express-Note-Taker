//uses the Path dependency to navigate files
var path = require("path");

module.exports = function (app) {

    //route for notes.html
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/notes.html"));
    });

    // If no matching route is found default to home 
    //changed "*" to "/" for heroku deployment
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/index.html"));
    });


};