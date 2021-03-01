//Dependencies
var express = require("express");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup public folder for images, js, css
app.use(express.static('public'));

//ROUTES

//API 
require("./db/routes/apiRoutes")(app);

// HTML 
require("./db/routes/htmlRoutes")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});


