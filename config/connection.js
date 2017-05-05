// Create a `connection.js` file inside `config` directory.
//
//    * Inside the `connection.js` file, setup the code to connect Node to MySQL.
//
//    * Export the connection.
const mysql = require('mysql');

var source = {

	localhost: {
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burger_db'
	},
	jawsDB: {
		port: 3306,
		host: '',
		user: '',
		password: '',
		database: ''
	}

}

var connection = mysql.createConnection( source.jawsDB );

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('Databased connected as id: ' + connection.threadId);
});

module.exports = connection;
