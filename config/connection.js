// Create a `connection.js` file inside `config` directory.
//
//    * Inside the `connection.js` file, setup the code to connect Node to MySQL.
//
//    * Export the connection.
const mysql = require('mysql');

const connection = mysql.createConnection({
  port: 3306,
  host: "localhostB",
  user: "root",
  password: "",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;
