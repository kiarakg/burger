var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

// Set the port of our application
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Start server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});