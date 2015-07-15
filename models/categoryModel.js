'use strict';
var mongoose = require('mongoose');

var categoryModel = function() {
	// Define a schema for category
	var categorySchema = mongoose.Schema({
		name: String
	});

	return mongoose.model('Category', categorySchema);
};

module.exports = new categoryModel();