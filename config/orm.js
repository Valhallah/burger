const connection = require('../config/connection');


// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
//
//   * `selectAll()`
//   * `insertOne()`
//   * `updateOne()`
//
// * Export the ORM object in `module.exports`.

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {
  selectAll: function (tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

  insertOne: function (table, col, val, cb) {
		var queryString = 'INSERT INTO ' + table;

		queryString += ' (';
		queryString += col;
		queryString += ') ';
		queryString += 'VALUES (';
		queryString += '?';
		queryString += ') ';

		connection.query(queryString, val, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function (table, objColVal, condition, cb) {
		var queryString = 'UPDATE ' + table;

		queryString += ' SET ';
		queryString += objToSql(objColVal);
		queryString += ' WHERE ';
		queryString += condition;

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;
