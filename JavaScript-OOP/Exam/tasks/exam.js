 function Solve() {

     function indexOfElementWithIdInCollection(collection, id) {
         var i, len;
         for (i = 0, len = collection.length; i < len; i++) {
             if (collection[i].id === id) {
                 return i;
             }
         }

         return -1;
     }

     function getSortingFunction(firstParameter) {
         return function(first, second) {
             if (first[firstParameter] < second[firstParameter]) {
                 return -1;
             } else if (first[firstParameter] > second[firstParameter]) {
                 return 1;
             }
         };
     }


     var validator = {

         validateIfUndefined: function(val, name) {
             name = name || 'Value';
             if (val === undefined) {
                 throw new Error(name + ' cannot be undefined');
             }
         },
         validateIfObject: function(val, name) {
             name = name || 'Value';
             if (typeof val !== 'object') {
                 throw new Error(name + ' must be an object');
             }
         },
         validateIfNumber: function(val, name) {
             name = name || 'Value';
             if (typeof val !== 'number') {
                 throw new Error(name + ' must be a number');
             }
         },

         validateString: function(val, name, min, max) {
             name = name || 'Value';
             this.validateIfUndefined(val, name);

             if (typeof val !== 'string') {
                 throw new Error(name + ' must be a string');
             }

             if (val.length < min || max < val.length) {
                 throw new Error(name + ' must be between ' + min +
                     ' and ' + max + ' symbols');
             }
         },

         validateIsbn: function(val, name, min, max) {
             name = name || 'Value';
             this.validateIfUndefined(val, name);

             if (typeof val !== 'string') {
                 throw new Error(name + ' must be a string');
             }

             if (val.length !== min && val.length !== max) {
                 throw new Error(name + ' must be exactly ' + min +
                     ' or ' + max + ' symbols');
             }
             if (!val.match(/^\d+$/)) {
                 throw new Error(name + 'must contain only digits');
             }
         },

         validatePositiveNumber: function(val, name) {
             name = name || 'Value';
             this.validateIfUndefined(val, name);
             this.validateIfNumber(val, name);

             if (val <= 0) {
                 throw new Error(name + ' must be positive number');
             }
         },
         validateRating: function(val, name, min, max) {
             this.validatePositiveNumber(val, name);
             if (val < min || max < val) {
                 throw new Error(name + ' must be between ' + min +
                     ' and ' + max);
             }
         }

     };
     //Item----------------------------------------------------------------
     var item = (function() {
         var currentItemId = 0,

             item = Object.create({});

         Object.defineProperty(item, 'init', {
             value: function(description, name) {
                 this.description = description;
                 this.name = name;
                 this._id = ++currentItemId;
                 return this;
             }
         });

         Object.defineProperty(item, 'id', {
             get: function() {
                 return this._id;
             }
         });


         Object.defineProperty(item, 'name', {
             get: function() {
                 return this._name;
             },
             set: function(val) {
                 validator.validateString(val, 'Item name', 2, 40);
                 this._name = val;
             }
         });
         return item;
     })();


     // BOOK-------------------------------------------------------
     var book = (function(parent) {

         book = Object.create(parent);

         Object.defineProperty(book, 'init', {
             value: function(name, isbn, genre, description) {
                 parent.init.call(this, name, description);
                 this.isbn = isbn;
                 this.genre = genre;
                 return this;
             }
         });

         Object.defineProperty(book, 'isbn', {
             get: function() {
                 return this._isbn;
             },
             set: function(val) {
                 validator.validateIsbn(val, 'Book ISBN', 10, 13);
                 this._isbn = val;
             }
         });


         Object.defineProperty(book, 'genre', {
             get: function() {
                 return this._genre;
             },
             set: function(val) {
                 validator.validateString(val, 'Book genre', 2, 20);
                 this._genre = val;
             }
         });
         return book;
     })(item);

     //Media------------------------------------------------------------------------------
     var media = (function(parent) {

         media = Object.create(parent);

         Object.defineProperty(media, 'init', {
             value: function(name, rating, duration, description) {
                 parent.init.call(this, name, description);
                 this.duration = duration;
                 this.rating = rating;
                 return this;
             }
         });

         Object.defineProperty(media, 'duration', {
             get: function() {
                 return this._duration;
             },
             set: function(val) {
                 validator.validatePositiveNumber(val, 'Media duration');
                 this._duration = val;
             }
         });


         Object.defineProperty(media, 'rating', {
             get: function() {
                 return this._rating;
             },
             set: function(val) {
                 validator.validateRating(val, 'Media rating', 1, 5);
                 this._rating = val;
             }
         });
         return media;
     })(item);
     //Catalog-------------------------------------------------------------------------------------
     var catalog = (function() {
         var currentCatalogId = 0,

             catalog = Object.create({});

         Object.defineProperty(catalog, 'init', {
             value: function(name) {
                 this.name = name;
                 this._id = ++currentCatalogId;
                 this.items = [];
                 return this;
             }
         });

         Object.defineProperty(catalog, 'id', {
             get: function() {
                 return this._id;
             }
         });


         Object.defineProperty(catalog, 'name', {
             get: function() {
                 return this._name;
             },
             set: function(val) {
                 validator.validateString(val, 'Catalog name', 2, 40);
                 this._name = val;
             }
         });

         // Object.defineProperty(catalog, 'add', {
         //     value: function(item) {
         //         for (var i = 0; i < arguments.length; i++) {
         //             validator.validateIfUndefined(arguments[i], 'Catalog add item parameter');
         //             validator.validateIfObject(arguments[i], 'Catalog add item parameter');
         //             this.items.push(item);
         //         }
         //         return this;
         //     }
         // });

         Object.defineProperty(catalog, 'search', {
             value: function(pattern) {
                 validator.validateString(pattern, 'Pattern', 1, 10000000);
             }
         });

         Object.defineProperty(catalog, 'find', {
             value: function(id) {
                 validator.validateIfUndefined(id, 'Catalog find item parameter id');
                 validator.validateIfNumber(id, 'Catalog find item paratemeter id');

                 var foundIndex = indexOfElementWithIdInCollection(this.items, id);
                 if (foundIndex < 0) {
                     return null;
                 }

                 return this.items[foundIndex];
             }
         });

         // Object.defineProperty(catalog, 'find', {
         //     value: function() {

         //     }
         // });


         return catalog;
     })();

     //Book Catalog-----------------------------------------------------------------
     var bookCatalog = (function(parent) {

         bookCatalog = Object.create(parent);

         Object.defineProperty(bookCatalog, 'init', {
             value: function(name) {
                 parent.init.call(this, name);
                 return this;
             }
         });

         Object.defineProperty(bookCatalog, 'add', {
             value: function(item) {
                 parent.add.call(this, item);
                 return;
             }
         });

         // Object.defineProperty(bookCatalog, 'add', {
         //     value: function() {
         //         return;
         //     }
         // });

         Object.defineProperty(bookCatalog, 'getGenres', {
             value: function() {
                 var genres = [];
                 for (var i = 0; i < this.items.length; i++) {
                     genres.push(this.items[i].genre);
                 }
                 return genres;
             }
         });

         // Object.defineProperty(bookCatalog, 'find', {
         //     value: function() {
         //         return;
         //     }
         // });

         return bookCatalog;
     })(catalog);
     //Media Catalog ------------------------------------------------------------------------

     var mediaCatalog = (function(parent) {

         mediaCatalog = Object.create(parent);

         Object.defineProperty(mediaCatalog, 'init', {
             value: function(name) {
                 parent.init.call(this, name);
                 return this;
             }
         });

         Object.defineProperty(mediaCatalog, 'add', {
             value: function(item) {
                 parent.add.call(this, item);
                 return;
             }
         });

         Object.defineProperty(mediaCatalog, 'getSortedByDuration', {
             value: function() {
                 var result = this.items.sort(getSortingFunction('duration'));
                 return result;
             }
         });

         Object.defineProperty(mediaCatalog, 'getSortedByDuration', {
             value: function() {
                 var result = this.items.sort(function getSortingFunction() {
                     return function(first, second) {
                         var firstParameter = 'id';

                         if (first[firstParameter] < second[firstParameter]) {
                             return 1;
                         } else if (first[firstParameter] > second[firstParameter]) {
                             return -1;
                         }
                     };
                 });
                 return result;
             }
         });

         Object.defineProperty(mediaCatalog, 'getTop', {
             value: function(count) {
                 validator.validateIfNumber(count);
                 var result = this.items.sort(getSortingFunction('rating'));
                 return result.slice(0, count);
             }
         });


         return mediaCatalog;
     })(catalog);

     return {
         getBook: function(name, isbn, genre, description) {
             return Object.create(book).init(name, isbn, genre, description);
         },
         getMedia: function(name, rating, duration, description) {
             return Object.create(media).init(name, rating, duration, description);
         },
         getBookCatalog: function(name) {
             return Object.create(bookCatalog).init(name);
         },
         getMediaCatalog: function(name) {
             return Object.create(mediaCatalog).init(name);
         }
     };
 }


 // var module = Solve();
 // var catalog = module.getBookCatalog('John\'s catalog');

 // var book1 = module.getBook('The secrets of the JavaScript Ninja', '1234567890', 'IT', 'A book about JavaScript');
 // var book2 = module.getBook('JavaScript: The Good Parts', '0123456789', 'IT', 'A good book about JS');
 // catalog.add(book1);
 // catalog.add(book2);
 // //console.log(catalog.items);

 //  console.log(catalog.find(book1.id));
 // //returns book1

 // console.log(catalog.find({id: book2.id, genre: 'IT'}));
 // //returns book2

 //console.log(catalog.search('js')); 
 // // returns book2

 // console.log(catalog.search('javascript'));
 // //returns book1 and book2

 // console.log(catalog.search('Te sa zeleni'));
 //returns []