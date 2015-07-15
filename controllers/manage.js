'use strict';

module.exports = function (router) {
	// Dashboard
	router.get('/', function (req, res) {
		res.render('manage/index');
	});
	// Books
	router.get('/books', function (req, res) {
		res.render('manage/books/index');
	});
	// Categories
	router.get('/categories', function (req, res) {
		res.render('manage/categories/index');
	});
};
