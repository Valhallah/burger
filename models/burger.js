const orm = require('../config/orm');

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
//
// * Export at the end of the `burger.js` file.


var burger = {
	selectAll: function (cb) {
		orm.selectAll('burgers', function (res) {
			cb(res);
		});
	},
	insertOne: function (col, val, cb) {
		orm.insertOne('burgers', col, val, function (res) {
			cb(res);
		});
	},
	updateOne: function (objColVal, condition, cb) {
		orm.updateOne('burgers', objColVal, condition, function (res) {
			cb(res);
		});
	}
};

module.exports = burger;
