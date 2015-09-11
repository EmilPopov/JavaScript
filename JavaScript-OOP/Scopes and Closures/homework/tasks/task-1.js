/* Task Description */
/* 
 *	Create a module for working with books
 *	The module must provide the following functionalities:
 *	Add a new book to category
 *	Each book has unique title, author and ISBN
 *	It must return the newly created book with assigned ID
 *	If the category is missing, it must be automatically created
 *	List all books
 *	Books are sorted by ID
 *	This can be done by author, by category or all
 *	List all categories
 *	Categories are sorted by ID
 *	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
 *	When adding a book/category, the ID is generated automatically
 *	Add validation everywhere, where possible
 *	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
 *	Author is any non-empty string
 *	Unique params are Book title and Book ISBN
 *	Book ISBN is an unique code that contains either 10 or 13 digits
 *	If something is not valid - throw Error
 */
function solve() {
	var library = (function() {
		var books = [];
		var categories = [];
		//=====================================================
		//Unique params are Book title and Book ISBN
		function checkRepeatTitleOrIsbn(title, isbn) {

			for (var i = 0; i < books.length; i++) {
				if ((books[i].title === title) || (books[i].isbn === isbn)) {
					throw new Error('Book title or ISBN alredy exist');
				}
			}
		}
		//Book ISBN is an unique code that contains either 10 or 13 digits
		function checkIsbn(isbn) {
			if (isbn.length !== 10 && isbn.length !== 13) {
				throw new Error('ISBN must be 10 or 13 digits');
			}
			if (!/^[0-9]+$/.test(isbn.toString())) {
				throw new Error('Invalid ISBN');
			}
		}
		//Author is any non-empty string
		function checkAuthor(author) {
			if (author.trim() === '') {
				throw new Error('Invalid author');
			}
		}

		function addCategory(category) {
			if (categories.indexOf(category) < 0) {
				categories[category] = {
					books: [],
					ID: categories.length + 1
				};
			}
		}
		//=========================================================================
		function listBooks(property) {
			var booksTemp = books.slice(); // Capsulate books
			if (property) {
				var prop;
				for (prop in property) {
					if (property.hasOwnProperty(prop)) {
						booksTemp = booksTemp.filter(function(item) {
							return item[prop] === property[prop];
						});
					}
				}
			}

			return booksTemp.sort(function(a, b) {
				return a.id - b.id;
			});

			// function listBooks(parameter) {
			// 	if (arguments.length > 0) {
			// 		if (typeof parameter.category !== 'undefined') {
			// 			return typeof categories[parameter.category] !== 'undefined' ?
			// 				categories[parameter.category].books : [];
			// 		}

			// 		if (typeof parameter.author !== 'undefined') {

			// 			var booksToList = [];

			// 			for (var ind = 0, len = books.length; ind < len; ind += 1) {
			// 				if (books[ind].author === parameter.author) {
			// 					booksToList.push(books[ind]);
			// 				}
			// 			}

			// 			return booksToList;
			// 		}
			// 	}

			// 	return books;
			// }
		}

		function addBook(book) {
			checkIsbn(book.isbn);
			checkAuthor(book.author);
			checkRepeatTitleOrIsbn(book.title, book.isbn);
			addCategory(book.category);
			categories[book.category].books.push(book);
			book.ID = books.length + 1;
			books.push(book);
			return book;
		}

		function listCategories() {
			var categoriesNames = [];
			Array.prototype.push.apply(categoriesNames, Object.keys(categories));

			return categoriesNames;
		}

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	}());
	return library;
}
module.exports = solve;