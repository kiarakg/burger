// Require mysql npm package to create a connection to the mysql database.
var mysql = require("mysql");

//require("dotenv").config();

// Define database connection properties
// Use production database when deployed.
if (process.env.JAWSDB_URL) {
  // Heroku deployment
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}

else {
  // else use localhost database for local development.
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}

connection.connect(function(err) {
  // If there is an error when connecting to the database, log the error to the console.
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  // If a database connection is established, log the database thread number.
  console.log("connected as id " + connection.threadId);
});

// Export the connection properties
module.exports = connection;
