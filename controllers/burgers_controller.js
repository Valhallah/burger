var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// Create the `router` for the app, and export the `router` at the end of your file.

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.selectAll(function (data) {
		var hbsObject = { burgers: data };
		res.render('index', hbsObject);
	});
});

router.post('/burgers/add', function (req, res) {
	burger.insertOne('burger_name', req.body.burger_name, function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/devour/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;
	burger.updateOne({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/burgers');
	});
});

module.exports = router;
