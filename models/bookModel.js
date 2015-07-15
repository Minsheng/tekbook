'use strict';
var mongoose = require('mongoose');

var bookModel = function() {
	// Define a schema for book
	var bookSchema = mongoose.Schema({
		title: String,
		category: String,
		author: String,
		description: String,
		publisher: String,
		price: Number,
		cover: String // cover image
	});
	// Shorten description text
	bookSchema.methods.truncText = function(length) {
		if (this.description.length > length) {
			return this.description.substring(0, length).concat("...");
		}
		return this.description;
	};

	return mongoose.model('Book', bookSchema);
};

module.exports = new bookModel();