// Create a `connection.js` file inside `config` directory.
//
//    * Inside the `connection.js` file, setup the code to connect Node to MySQL.
//
//    * Export the connection.
const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
	connection = mysql.create.Connection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
				port: 3306,
				host: 'localhost',
				user: 'root',
				password: '',
				database: 'burger_db'
			}
	})
}

// var source = {
//
// 	localhost: {
// 		port: 3306,
// 		host: 'localhost',
// 		user: 'root',
// 		password: '',
// 		database: 'burger_db'
// 	},
// 	jawsDB: {
// 		port: 3306,
// 		host: 'o3iyl77734b9n3tg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
// 		user: 'u6lisz77elpdct5t',
// 		password: 'azxoubo70wvbqyzq',
// 		database: 'hqfckpegci7vr4i6'
// 	}
//
// };

// var connection = mysql.createConnection(source.jawsDB);

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('Databased connected as id: ' + connection.threadId);
});

module.exports = connection;
